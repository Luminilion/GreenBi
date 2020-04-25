import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Redirect, Router, useHistory} from 'react-router-dom'

import { IonContent,
    IonButton,
  } from '@ionic/react';

const CheckoutForm : React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
    

        var response = await fetch('http://localhost:3000/secret');
        var json = await response.json();
        var clientSecret = json.client_secret
        console.log("RESPONSE");
        console.log(json);
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);

          const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: 'Amaury Perdriau',
              },
            }
          });
         
          console.log(result);

          if(result.paymentIntent.status == "succeeded"){
            //this.props.history.push('/payment-success');
            history.push('/payment-success');
            //history.pushState({},'/payment-success','/payment-success');
            console.log("IL FAUT REDIRIGER");
          }
        }
      };
    return (

        <form>
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
            <IonButton onClick={handleSubmit} disabled={!stripe}>
                Pay
            </IonButton>
        </form>

       
    );
};

export default CheckoutForm;