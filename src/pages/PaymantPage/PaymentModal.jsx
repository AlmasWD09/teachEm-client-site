import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../components/Form/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PaymentModal = ({ isOpen, setIsOpen,closeModal, singleClass }) => {
    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                        <Description>This will permanently deactivate your account</Description>
                        <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>

                        <Elements stripe={stripePromise}>
                            {/* checkout form */}
                            <CheckoutForm setIsOpen={setIsOpen} closeModal={closeModal} singleClass={singleClass} />
                        </Elements>

                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
// props-type validation
PaymentModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    closeModal: PropTypes.func,
    singleClass: PropTypes.object,
};
export default PaymentModal;