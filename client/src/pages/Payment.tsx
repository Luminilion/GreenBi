import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

import './MainPage.css';
import './styles.css';


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { RouteComponentProps} from 'react-router-dom';

import CheckoutForm from '../components/CheckoutForm';
const stripePromise = loadStripe('pk_test_RIyFESooUbStZmmKdrfS6RvY00B3i58XjC');

interface PaymentProps extends RouteComponentProps<{
  montant: string;
}> {}


const Payment: React.FC<PaymentProps> = ({match}) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
          <IonTitle>PAIEMENT  </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>PAYER PAYER {match.params.montant} </IonCard>
        <Elements stripe={stripePromise}>
          <CheckoutForm montant={match.params.montant} />
        </Elements>
      </IonContent>

    </IonPage>
  );
};

export default Payment;
