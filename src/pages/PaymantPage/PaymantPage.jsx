import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymantPage = () => {
    const {id} = useParams()
    return (
        <div className="mt-10">
             <Elements stripe={stripePromise}>
                    <CheckoutForm  id={id}/>
                </Elements>
        </div>
    );
};

export default PaymantPage;