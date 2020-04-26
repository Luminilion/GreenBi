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
} from '@ionic/react';

import './MainPage.css';
import './styles.css';


import {loadStripe} from '@stripe/stripe-js';


const PaymentSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contrat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccess;
