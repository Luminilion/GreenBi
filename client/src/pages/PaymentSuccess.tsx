import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
} from '@ionic/react';

import './MainPage.css';
import './styles.css';



const PaymentSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
