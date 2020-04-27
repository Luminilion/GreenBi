import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonItem,
  IonIcon,
  IonLoading,
} from '@ionic/react';

import './MainPage.css';
import './styles.css';


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import CheckoutForm from '../components/CheckoutForm';
const stripePromise = loadStripe('pk_test_RIyFESooUbStZmmKdrfS6RvY00B3i58XjC');

const Payment: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>PAYER PAYER</IonCard>
        <Elements stripe={stripePromise}>
          <CheckoutForm  />
        </Elements>
      </IonContent>
      
    </IonPage>
  );
};

export default Payment;
