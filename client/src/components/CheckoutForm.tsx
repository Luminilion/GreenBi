import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom'

import {
    IonButton,
    IonLoading,
  } from '@ionic/react';

interface CheckoutFormProps {
  montant: string;
  successUrl: string;
}

const CheckoutForm : React.FC<CheckoutFormProps> = ({montant,successUrl}) => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [showLoading, setShowLoading] = React.useState(false);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setShowLoading(true);
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);


        var response = await fetch('http://localhost:3000/secret/' + montant);
        var json = await response.json();
        var clientSecret = json.client_secret
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
            setShowLoading(false);
            history.push(successUrl);
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
                Procéder au paiement
            </IonButton>
            <IonLoading
              isOpen={showLoading}
              onDidDismiss={() => setShowLoading(false)}
              message={'Nous procédons au transfert de fonds. Veuillez patienter ...'}
              duration={5000}
            />
        </form>


    );
};

export default CheckoutForm;
