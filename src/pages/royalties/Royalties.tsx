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
import UtilsFullCategory from '../utils/UtilsFullCategory';

import '../MainPage.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Royalties</IonTitle>
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
