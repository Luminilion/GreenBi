import React from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,
IonCardContent, IonCardSubtitle, IonCardTitle, IonSlides, IonSlide, IonItem,IonIcon,IonLabel,IonButton} from '@ionic/react';
import * as UtilsSlides from '../utils/UtilsSlides';

import '../MainPage.css';
import '../styles.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stocks</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <IonSlides options={ {slidesPerView: 2.5} } >

        <IonSlide>
          <IonCard href="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

      <IonSlide>

        <IonCard href="/investir">
          <IonItem>
            <img src="eiffel.jpg"></img>
          </IonItem>

          <IonCardContent>
            Investir dans mon super projet de tour eiffel
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>


        <IonCard href="/investir">
          <IonItem>
            <img src="eiffel.jpg"></img>
          </IonItem>

          <IonCardContent>
            Investir dans mon super projet de tour eiffel
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>


        <IonCard href="/investir">
          <IonItem>
            <img src="eiffel.jpg"></img>
          </IonItem>

          <IonCardContent>
            Investir dans mon super projet de tour eiffel
          </IonCardContent>
        </IonCard>
      </IonSlide>

        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
