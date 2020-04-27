import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonAvatar,
} from '@ionic/react';


import './PortfolioDetail.css';

const PortfolioDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PROJET TOUR EIFFEL</IonTitle>
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="portfolio-detail">
        <IonCard><br /> 
        <b></b> <br /> 
        <IonItem>
            
        <IonAvatar>
            <img src="./eiffel.jpg" />
        </IonAvatar>
        </IonItem>
        <br /> 
        Vous avez gagné 324.32 € avec un seul projet<br /> 
        C'est vraiment beaucoup beaucoup d'argent
        </IonCard>
       
      </IonContent>
    </IonPage>
  );
};

export default PortfolioDetail;
