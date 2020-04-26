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
            history.push('https://demo.docusign.net/Signing/MTRedeem/v1/fb6bab14-69b0-4f11-b998-c9b7987cfd02?slt=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQUAAAABAAMABwAApL9BbenXSAgAAAKQ9G3p10gYAAEAAAAAAAAAIQBdAwAAeyJUb2tlbklkIjoiYzMyZjkwZDAtOGYyMy00MzZhLWFlNTctN2Q1MDgxZGRkZjAxIiwiU3ViamVjdCI6bnVsbCwiU3ViamVjdFR5cGUiOm51bGwsIkV4cGlyYXRpb24iOiIyMDIwLTA0LTI1VDIzOjExOjE2KzAwOjAwIiwiSXNzdWVkQXQiOiIyMDIwLTA0LTI1VDIzOjA2OjE2Ljg2MjY2OTcrMDA6MDAiLCJSZXNvdXJjZUlkIjoiMWI3ZjhjNDAtN2U2Ni00OTJhLThhZTQtNWRiOWI0ODdhYmFlIiwiTGFiZWwiOm51bGwsIlNpdGVJZCI6bnVsbCwiUmVzb3VyY2VzIjoie1wiRW52ZWxvcGVJZFwiOlwiMWI3ZjhjNDAtN2U2Ni00OTJhLThhZTQtNWRiOWI0ODdhYmFlXCIsXCJBY3RvclVzZXJJZFwiOlwiYjlkZjY1MTItYmNkYi00MGUwLTkzMTAtOTQyYjhlNDE1YzM0XCIsXCJSZWNpcGllbnRJZFwiOlwiZmU2MDVlM2ItNTNkMC00NzY0LTkwMGQtMjQ0N2Q4ZjczZDFhXCIsXCJGYWtlUXVlcnlTdHJpbmdcIjpcInQ9NTcyMmM2NTAtNTkyZC00NWZkLTk3Y2UtYmNiMTMwYWQyY2YyXCJ9IiwiT0F1dGhTdGF0ZSI6bnVsbCwiVG9rZW5UeXBlIjoxLCJBdWRpZW5jZSI6IjI1ZTA5Mzk4LTAzNDQtNDkwYy04ZTUzLTNhYjJjYTU2MjdiZiIsIlNjb3BlcyI6bnVsbCwiUmVkaXJlY3RVcmkiOiJodHRwczovL2RlbW8uZG9jdXNpZ24ubmV0L1NpZ25pbmcvU3RhcnRJblNlc3Npb24uYXNweCIsIkhhc2hBbGdvcml0aG0iOjAsIkhhc2hTYWx0IjpudWxsLCJIYXNoUm91bmRzIjowLCJUb2tlblNlY3JldEhhc2giOm51bGwsIlRva2VuU3RhdHVzIjowLCJFeHRlcm5hbENsYWltc1JlcXVlc3RlZCI6bnVsbCwiVHJhbnNhY3Rpb25JZCI6bnVsbCwiVHJhbnNhY3Rpb25FdmVudENhbGxiYWNrVXJsIjpudWxsLCJJc1NpbmdsZVVzZSI6ZmFsc2V9.LgfP_L8D3FIGZi0z28ZGO9LquM-_W7yNwAsaCGDVT52OxTd6G8cG4_QZYqWtI-qpQ5rmeqes2YSMCd5vvPnokZgpnimxhcSpEad5Vc-q3QYU37tmhKxsogNEl9CZzfM2oG2CEzMuHzCbRYsXXVhNIvV4cxW0wdFMGtAYaMtfKMKwpp7-VplT1_dFLqT1LJsBI56O150hVmQdmNdyluJHKxExznnkZNwxe8NA6CcbKUprYKwfWY8B19k4JtN0XdvjCq1J607aFq7QOCSmMAnhi-uoEljIBi3toMsUv_FZuTcvMqE2iTapHDnx-cT1vHizRF6jZnelZEuUvzwjU0PgIw');
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