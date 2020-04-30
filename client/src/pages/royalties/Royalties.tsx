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
import RoyaltiesFilter from '../../components/Royalties/RoyaltiesFilter';
import PointInfo from '../../components/utils/PointInfo';
import infoRoyalties from './InfoRoyalties';

import '../MainPage.css';

const Tab1: React.FC = () => {

  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Royalties</IonTitle>
          <IonMenuButton slot="start" />
          <IonButtons slot="end">
            <PointInfo
              type="info"
              content={infoRoyalties}
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

        <RoyaltiesFilter />

        <UtilsFullCategory
          slidesPerView={2.5}
          freeMode={true}
          product="royalties"
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
