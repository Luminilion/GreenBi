import React from 'react';

import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonItem,
  IonCard,
  IonCardContent
} from "@ionic/react";

const UtilsSlides : React.FC = () => {
  return (
    <IonContent>
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
  </IonContent>
  );
};


export default UtilsSlides;
