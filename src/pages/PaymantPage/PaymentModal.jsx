import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../components/Form/CheckoutForm/CheckoutForm';
import { Fragment } from 'react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PaymentModal = ({ closeModal, isOpen, singleClass, refetch }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <DialogTitle
                                    as="h3"
                                    className="text-lg font-medium text-center leading-6 text-gray-900"
                                >
                                    Review Info Before Reserve
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Title: {singleClass?.title}
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Name : {singleClass?.name}
                                    </p>
                                </div>

                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Email : {singleClass?.email}
                                    </p>
                                </div>

                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Price: $ {singleClass?.price}
                                    </p>
                                </div>
                                <hr className="mt-8 " />
                                <Elements stripe={stripePromise}>
                                    {/* checkout form */}
                                    <CheckoutForm
                                        refetch={refetch}
                                        closeModal={closeModal}
                                        singleClass={singleClass} />
                                </Elements>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
// props-type validation
PaymentModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    closeModal: PropTypes.func,
    refetch: PropTypes.func,
    singleClass: PropTypes.object,
};
export default PaymentModal;