import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutForm.css'

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useRole from '../../../hooks/useRole';



const CheckoutForm = ({ singleClass, closeModal }) => {
  const { user } = useAuth()
  const {role} = useRole()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [cardError, setCardError] = useState()
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (singleClass?.price && singleClass?.price > 1) {
      getClientSecret({ price: singleClass?.price })
    }
  }, [singleClass?.price])

  //   get clientSecret
  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price)
    console.log('clientSecret from server--->', data)
    setClientSecret(data.clientSecret)
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()
    setProcessing(true)
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card == null) {
      return
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
      setProcessing(false)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('')
    }
    // user role check
    if(role === 'teacher' || role === 'admin'){
      toast.error(`${role} Not allow`)
      return 
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      // console.log(confirmError)
      setCardError(confirmError.message)
      setProcessing(false)
      return
    }

    if (paymentIntent.status === 'succeeded') {
      // console.log(paymentIntent);
      const paymentInfo = {
        ...singleClass,
        transactionId: paymentIntent.id,
      }
      console.log(paymentInfo);

      try {
        // 2. save payment info in payment collection (db)
        const res = await axiosSecure.post('/payment', paymentInfo)
        if (res.data.insertedId) {
          toast.success('Payment Successfully')
          navigate('/dashboard/my-enroll-class')
        }
      }
      catch (err) {
        console.log(err)
        toast.error('Duplicated class not allow')
      }
    }

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <div className='flex mt-2 justify-around'>
          <button type="submit"
            disabled={!stripe || !clientSecret ||processing}
            className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${
              !stripe || !clientSecret ||processing ? 'bg-red-500 cursor-not-allowed' : 'bg-primary'
            }`}>
            Pay ${singleClass.price}
          </button>
          <button
            onClick={closeModal}
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
          >
            Cancel
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  );
};

// props-type validation
CheckoutForm.propTypes = {
  singleClass: PropTypes.object,
  closeModal: PropTypes.func,
};
export default CheckoutForm;