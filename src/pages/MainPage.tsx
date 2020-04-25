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
  IonIcon
} from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './MainPage.css';
import './styles.css';
import UtilsSlides from './utils/UtilsSlides';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <UtilsSlides name="Stocks"></UtilsSlides>
        <UtilsSlides name="Royalties"></UtilsSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
