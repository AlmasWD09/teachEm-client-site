import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymantPage = () => {
    return (
        <div className="mt-10">
             <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
        </div>
    );
};

export default PaymantPage;