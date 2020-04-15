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

const Payment: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonCard>PAYER PAYER</IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
