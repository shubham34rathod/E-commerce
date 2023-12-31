import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from 'react-redux'

import CheckoutForm from "./CheckoutForm";
import './stripCheckout.css'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OCG1cSBFoZu0Gfc45LM1oVBJfwtMcPKT7CaMiRSEc1iCDy0A3iBUdip5hgN1Tjg26QMIou2O7KeWgwp5gH2SmqA00oPhAMd9Z");

export default function StripCheckout() {

    let currentOrder = useSelector((state) => state.products.currentOrder)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://e-commerce-backend-tdjw.onrender.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: currentOrder }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setClientSecret(data.clientSecret)
            })
            .catch((error)=>console.log(error))
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="Strip">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
