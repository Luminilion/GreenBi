import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonImg,
} from '@ionic/react';

import UtilsCategory from '../components/utils/UtilsCategory';

import ProjectData from '../data/ProjectData';

import './MainPage.css';
import './styles.css';

const Tab1: React.FC = () => {
    console.log(ProjectData);
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
                <IonTitle>GreenBi</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>


            <h1 style={{ margin:25 }}>
                Bienvenue !
            </h1>

            <UtilsCategory
                name="Stocks phares"
                slidesPerView={2.5}
                description="Current most profitable stocks on the market. Most users trust these !"
                moreLink="/stocks"
                projects={ProjectData.stocks}
            />
            <UtilsCategory
                name="Trendy royalties"
                slidesPerView={2.5}
                description="Top trends on current available royalties. These projects are on fire !"
                moreLink="/royalties"
                projects={ProjectData.royalties}
            />


        </IonContent>
        </IonPage>
    );
};

export default Tab1;
