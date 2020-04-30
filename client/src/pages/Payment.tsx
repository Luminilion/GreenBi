import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButtons,
  IonBackButton,
  IonAvatar,
} from '@ionic/react';



import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { RouteComponentProps} from 'react-router-dom';

import CheckoutForm from '../components/CheckoutForm';
import './Payment.css';


const stripePromise = loadStripe('pk_test_RIyFESooUbStZmmKdrfS6RvY00B3i58XjC');

interface PaymentProps extends RouteComponentProps<{
  projectType: string;
  projectId: string;
  amount: string;
}> {}


const Payment: React.FC<PaymentProps> = ({match}) => {
  const successUrl = '/payment-success/' + 
    match.params.projectType + '/' + 
    match.params.projectId + '/' + 
    match.params.amount;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
          <IonTitle>VIREMENT  </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="payment-content">
        
        <IonAvatar class="avatar ion-justify-content-center">
            <img src="avatar.png" />
        </IonAvatar>

        
        <h3>Vous vous apprêtez à faire un paiement de {match.params.amount} €</h3>
        <div className="container-logo-stripe">
          <img src="stripe.png"></img>
        </div>
        <div className="container-stripe">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            montant={match.params.amount} 
            successUrl={successUrl}/>
        </Elements>
        </div>
        
      </IonContent>

    </IonPage>
  );
};

export default Payment;
