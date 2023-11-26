import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
    const stripePromiss = loadStripe('pk_test_51OEBrkL70yxcRZ4CcKLXwW3LCRir1xPbPSE9gLmSBKDSLjgepAnRyVCpk0gIk2kBWjnGV5FsaCMWVhZ9TgqtMx6400xn1cV6VW')
    return ( 
        <Elements stripe={stripePromiss}>
            <CheckOutForm/>
        </Elements>
     );
}
 
export default Payment;