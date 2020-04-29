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
import projectData from '../data/ProjectData';

import { arrowForward, checkmark } from 'ionicons/icons';
interface PaymentSuccessProps extends RouteComponentProps<{
  projectType: string;
  projectId: string;
  amount: string
}> {}


const PaymentSuccess: React.FC<PaymentSuccessProps> = ({match}) => {

  const getProjectImage = function(type, id){
    let idInt = parseInt(id);
    if(type == "stocks"){
        return projectData.stocks[idInt].img;
    }else if(type == "royalties"){
        return projectData.royalties[idInt].img;
    }else{
        return "erreur";
    }
}

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
          <IonIcon color="success" icon={checkmark} />
          <p>Un mail de confirmation vous sera envoyé.</p>
        </IonCard>




        <IonCard class="card-item">
          <img src={getProjectImage(match.params.projectType,match.params.projectId)}></img>
          <h2>{match.params.amount + " €"}</h2>
        </IonCard>
        <div className="card-button">
          <IonButton class="small" routerLink="/main">Retour au menu</IonButton>
          <IonButton class="small" routerLink="/portfolio">Voir mon Portfolio</IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccess;
