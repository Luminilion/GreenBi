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
  IonButtons,
  IonMenuButton
} from '@ionic/react';

import './MainPage.css';
import './styles.css';


import {loadStripe} from '@stripe/stripe-js';



const PaymentSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
          <IonTitle>Payment success</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>Paiement accepté</IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccess;
