import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
} from '@ionic/react';

import UtilsCategory from '../components/utils/UtilsCategory';


import './MainPage.css';
import './styles.css';

const Tab1: React.FC = () => {
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
                product="stocks"
            />
            <UtilsCategory
                name="Trendy royalties"
                slidesPerView={2.5}
                description="Top trends on current available royalties. These projects are on fire !"
                moreLink="/royalties"
                product="royalties"
            />


        </IonContent>
        </IonPage>
    );
};

export default Tab1;
