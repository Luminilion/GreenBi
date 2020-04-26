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

import './Academy.css';

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
        <div id="parent">
          <div>
            <h1 className="text501">Oups...</h1>
            <br />
            <br />
            <img src="logov501.png" id="img501"/>
            <br />
            <br />
            <h3 className="text501">L'Académie est en cours de construction</h3>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Academy;
