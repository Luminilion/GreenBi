import React, { useState } from 'react';

import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
  IonButtons,
} from '@ionic/react';

import UtilsFullCategory from '../../components/utils/UtilsFullCategory';
import StocksFilter from '../../components/Stocks/StocksFilter';
import PointInfo from '../../components/utils/PointInfo';
import infoStocks from './InfoStocks';

import '../MainPage.css';
import '../styles.css';

const Tab1: React.FC = () => {

  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Actions</IonTitle>
          <IonMenuButton slot="start" />
          <IonButtons slot="end">
            <PointInfo
              type="info"
              content={infoStocks}
              />
          </IonButtons>
        </IonToolbar>
      </IonHeader>


      <IonContent>

        <IonSearchbar
          animated
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value!)}
        />

        <StocksFilter />

        <UtilsFullCategory
          slidesPerView={2.5}
          freeMode={true}
          product="stocks"
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
