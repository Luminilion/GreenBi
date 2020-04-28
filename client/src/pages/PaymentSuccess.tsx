import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonItem,
  IonButton,
} from '@ionic/react';

import './PaymentSuccess.css';
import { RouteComponentProps} from 'react-router-dom';

import { arrowForward, checkmark } from 'ionicons/icons';
interface PaymentSuccessProps extends RouteComponentProps<{
  projectType: string;
  projectId: string;
  amount: string
}> {}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({match}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
          <IonTitle>Succès</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="payment-success">
        <IonCard class="card-message">
          <h1>Paiement accepté</h1>
          <p>Un mail de confirmation vous sera envoyé</p>
          <IonIcon color="success" icon={checkmark} />
        </IonCard>
        
          
          
        
        <IonCard class="card-item">
          <img src="/eiffel.jpg"></img>
          <h2>{match.params.amount + " €"}</h2>
        </IonCard>
        <IonCard class="card-button">
          <IonButton>Retour au menu</IonButton>
          <IonButton class="success">Voir mon Portfolio</IonButton>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccess;
