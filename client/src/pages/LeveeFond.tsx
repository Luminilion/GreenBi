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
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
} from '@ionic/react';



import {loadStripe} from '@stripe/stripe-js';


import './LeveeFond.css';

const LeveeFond: React.FC = () => {

    const [montantProjet, setMontantProjet] = React.useState<number>(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Levée de Fond</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol>
                    Quel Montant souhaitez vous allouer à ce projet ?
                </IonCol>
                <IonCol>
                    <IonCard>
                        <IonInput placeholder="Enter Input"
                            onIonChange={e => setMontantProjet(parseInt(e.detail.value!, 10))}
                        ></IonInput>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                   Taux de rendement du projet 
                </IonCol>
                <IonCol>
                    <IonCard class="rendement-card">
                        5 % 
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
        Vous allez mettre {montantProjet} euros.
        <IonButton href={"/payment/" + montantProjet} class="participate-button center">Participer</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LeveeFond;
