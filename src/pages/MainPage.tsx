import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,
IonCardContent, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MainPage.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard href="/stocks">
            <IonCardHeader>
                <IonCardSubtitle>Stocks</IonCardSubtitle>
                <IonCardTitle>Stocks</IonCardTitle>
            </IonCardHeader>

            <IonCardContent >
                Les stocks, c'est vraiment trop trop trop super. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, velit id tincidunt pulvinar, felis odio blandit mi, id commodo met
                </IonCardContent>
            </IonCard>
        <IonCard href="/royalties">
            <IonCardHeader>
                <IonCardSubtitle>Royalties</IonCardSubtitle>
                <IonCardTitle>Royalties</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                Les Royalties, c'est vraiment trop super. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, velit id tincidunt pulvinar, felis odio blandit mi, id commodo met
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
