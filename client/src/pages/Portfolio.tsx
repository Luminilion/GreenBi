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


import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portfolio</IonTitle>
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard><br /> 
        <b>MON PORTFOLIO</b> <br /> 
        <br /> 
        Vous avez gagné 253.53 € <br /> 
        C'est vraiment beaucoup beaucoup d'argent
        </IonCard>
        <IonList>

      <IonItem href="/portfolio-detail" class="portfolio-item">
          <IonAvatar slot="start">
            <img src="./eiffel.jpg" />
          </IonAvatar>
          <IonLabel>
            <h2>Projet Tour Eiffel</h2>
            <p>+324.32 €</p>
          </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Portfolio;
