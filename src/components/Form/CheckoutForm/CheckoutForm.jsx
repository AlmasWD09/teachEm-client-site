import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutForm.css'

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




const CheckoutForm = ({ singleClass, closeModal,refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (singleClass?.price && singleClass?.price > 1) {
      getClientSecret({ price: singleClass?.price });
    }
  }, [singleClass?.price]);

  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price);
    setClientSecret(data?.clientSecret);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      setCardError("");
    }
    console.log(paymentMethod);
    console.log(user?.displayName, user?.email);

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    console.log(paymentIntent);
    if (confirmError) {
      console.log(confirmError);
      setCardError(error);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      const paymentInfo = {
        ...singleClass,
        paymentUserName: user?.displayName,
        paymentUserEmail: user?.email,
        classId: singleClass?._id,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      delete paymentInfo._id;
      console.log(paymentInfo);
    
        const { data } = await axiosSecure.post("/payment", paymentInfo);
        console.log(data);
        closeModal();
        refetch();
        if(data.insertedId){
          toast.success('Enroll succefully')
          // setTimeout(() =>{
            navigate("/dashboard/my-enroll-class");
            refetch()
          // },2000)
        }
        else{
          toast.error(error.message)
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
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around">
          <button
            disabled={!stripe || !clientSecret || processing}
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Pay ${singleClass?.price}
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            cancel
          </button>
        </div>
      </form>
      {/* <Toaster richColors position="top-right" /> */}
      {cardError && <p className="text-red-600">{cardError}</p>}
    </>
  );
};

// props-type validation
CheckoutForm.propTypes = {
  singleClass: PropTypes.object,
  closeModal: PropTypes.func,
  refetch: PropTypes.func,
};
export default CheckoutForm;