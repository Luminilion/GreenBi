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
  IonIcon,
  IonLabel,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import '../MainPage.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Royalties</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonSlides>

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

        <IonSlides>

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
