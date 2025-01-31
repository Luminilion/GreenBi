import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonButton,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import { IonActionSheet } from '@ionic/react';

import './MainPage.css';

import { close, logoEuro} from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
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
      <IonCard>
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>

            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">Investir</IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          text: '10 €',
          icon: logoEuro,
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: '20 €',
          icon: logoEuro,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: '50 €',
          icon: logoEuro,
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: '100 €',
          icon: logoEuro,
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
