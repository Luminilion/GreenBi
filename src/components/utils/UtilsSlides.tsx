/*
Describes a populated list of slides.

slidesPerView : indicates the number of slides to be visible at first glance on the screen.

*/

import React from 'react';

import {
  IonSlides,
  IonSlide,
  IonItem,
  IonCard,
  IonCardContent,
  IonIcon,
} from "@ionic/react";

import { arrowForward } from 'ionicons/icons';

interface UtilsSlidesProps {
  slidesPerView: number;
  moreLink: string;
}



const UtilsSlides : React.FC<UtilsSlidesProps> = ({ slidesPerView, moreLink }) => {
  return (

      <IonSlides  options={{ slidesPerView: slidesPerView }}>

        <IonSlide>
          <IonCard routerLink="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard routerLink="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard routerLink="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard routerLink="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonItem routerLink={moreLink} >
            <IonIcon icon={arrowForward} />
          </IonItem>
        </IonSlide>

      </IonSlides>

  );
};


export default UtilsSlides;
