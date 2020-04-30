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
import PointInfo from '../../components/utils/PointInfo';

import './Academy.css';
import infoAcademy from './InfoAcademy';

const Academy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Académie</IonTitle>
          <IonMenuButton slot="start" />
          <IonButtons slot="end" >
            <PointInfo
              type="info"
              content={infoAcademy}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div id="parent">
          <div>
            <h1 className="text501">Oups...</h1>
            <br />
            <br />
            <img src="logov501.png" id="img501" alt="501 error illustration"/>
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
