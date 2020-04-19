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
      </IonContent>
    </IonPage>
  );
};

export default Payment;
