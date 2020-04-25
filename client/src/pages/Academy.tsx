import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
} from '@ionic/react';

const Academy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Académie</IonTitle>
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div>
          <h1>Oups...</h1>
          <img src="logov501.png" />
          <h3>L'Académie est en cours de construction</h3>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Academy;
