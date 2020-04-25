import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Paramètres</IonTitle>
        <IonButtons slot="start" >
          <IonMenuButton />
        </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Settings;
