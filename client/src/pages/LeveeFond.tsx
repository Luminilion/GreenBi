import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

import './LeveeFond.css';

const LeveeFond: React.FC = () => {

    const [montantProjet, setMontantProjet] = React.useState<number>(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
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
        <IonButton routerLink={"/payment/" + montantProjet} class="participate-button center">Participer</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LeveeFond;
