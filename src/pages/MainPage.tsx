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
import UtilsCategory from './utils/UtilsCategory';

import './MainPage.css';
import './styles.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GreenBi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <div>
          <h1 style={{ margin:25 }}>
            Bienvenue !
          </h1>
        </div>

        <UtilsCategory
          name="Stocks phares"
          slidesPerView={2.5}
          description="Current most profitable stocks on the market. Most users trust these !"
          moreLink="/stocks"
        />
        <UtilsCategory
          name="Trendy royalties"
          slidesPerView={2.5}
          description="Top trends on current available royalties. These projects are on fire !"
          moreLink="/royalties"
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
