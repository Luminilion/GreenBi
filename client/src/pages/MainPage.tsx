import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonItem
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


            <h1 style={{ margin: 25 }}>
                Bienvenue !
            </h1>

            <UtilsCategory
                name="Actions phares"
                slidesPerView={2.5}
                description="Les actions en vogue en ce moment"
                moreLink="/stocks"
                product="stocks"
            />
            <UtilsCategory
                name="Royalties tendances"
                slidesPerView={2.5}
                description="Les tendances de projets proposant des royalties"
                moreLink="/royalties"
                product="royalties"
            />

            <br />
            <IonItem>
              © GreenBi
            </IonItem>

        </IonContent>
        </IonPage>
    );
};

export default Tab1;
