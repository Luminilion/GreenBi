import React from 'react';

import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/react';

import UtilsSlides from '../utils/UtilsSlides';
import UtilsFullCategory from '../utils/UtilsFullCategory';

import '../MainPage.css';
import '../styles.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stocks</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>


      <IonContent>

        <UtilsFullCategory
          slidesPerView={2.5}
          freeMode={true}
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
