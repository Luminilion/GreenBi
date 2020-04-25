import React, { useState } from 'react';

import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSearchbar,
} from '@ionic/react';

import UtilsFullCategory from '../../components/utils/UtilsFullCategory';
import StocksFilter from './StocksFilter';

import '../MainPage.css';
import '../styles.css';

const Tab1: React.FC = () => {

  const [searchText, setSearchText] = useState('');

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

        <IonSearchbar
          animated
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value!)}
        />

        <StocksFilter />

        <UtilsFullCategory
          slidesPerView={2.5}
          freeMode={true}
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
