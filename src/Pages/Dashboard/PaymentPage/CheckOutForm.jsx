
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckOutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransectionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const salary = 20000;
//   console.log(stripe.confirmCardPayment);

  useEffect(() => {
    if (salary > 0) {
     axiosSecure.post('/create-peyment-intent', {salary: salary})
     .then(res => {
        setClientSecret(res.data.clientSecret)
        // console.log('client secret--->',res.data);
     })
     .catch(err => {
        console.log('fetch error ---> ', err);
     })
    }
  }, [axiosSecure, salary]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements ) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    console.log(clientSecret);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transation id", paymentIntent.id);
        setTransectionId(paymentIntent.id);
      }
    }

     //*now save the payment
     const payment = {
        email: user?.email,
        price: salary,
        date: new Date(),      
        status: 'pending',
        transactionId: paymentIntent.id
      }

      
      const res = await axiosSecure.post('/payments', payment)
      if(res.data?.acknowledged){
        alert('payment success')
      }

  };

  return (
    <div>
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

        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe}>
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && (
          <p className="text-success text-xl">
            Your Transtaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
