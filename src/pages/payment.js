import React from "react";
import axios from "axios";

function Payment() {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            console.log("here")
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        // const result = await axios.post("http://localhost:5000/payment/orders");

        // if (!result) {
        //     alert("Server error. Are you online?");
        //     return;
        // }

        // Getting the order details back
        // const { amount, id: order_id, currency } = result.data;
        const amount = 50000;
        const order_id = 123456;
        const currency = 'INR'

        const options = {
            key: "rzp_test_RMN4UB8DaockPR", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Rahul Jai",
            description: "Test Transaction",
            // image: { logo },
            // order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                // const result = await axios.post("http://localhost:5000/payment/success", data);

                // alert(result.data.msg);
            },
            prefill: {
                name: "Rahul jai",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

        return (
            <div className="App">
                <p>hey Rahul, lets buy this </p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
            </div>
        );
    }

    export default Payment;