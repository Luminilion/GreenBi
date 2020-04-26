/*
Describes a full category view on slides.

slidesPerView : indicates the number of slides to be visible at first glance on the screen.
freeMode : gives the option to scroll freely and not always scroll to next element.

*/

import React from 'react';

import {
  IonSlides,
  IonSlide,
  IonItem,
  IonCard,
  IonCardContent,
  IonProgressBar,
} from "@ionic/react";

interface UtilsFullCategoryProps {
  slidesPerView: number;
  freeMode: boolean;
}



const UtilsFullCategory : React.FC<UtilsFullCategoryProps> = ({ slidesPerView, freeMode }) => {
  return (

    <IonSlides options={
      {
        direction: 'vertical',
        slidesPerView : slidesPerView,
        freeMode: freeMode
      }
    } >

      <IonSlide>
        <IonCard routerLink="/project-detail">
          <img src="eiffel.jpg" />
          <IonCardContent>
            EcoEiffel
          </IonCardContent>
          <IonProgressBar value={0.2} color="primary" /> <br />
          <IonProgressBar value={0.7} color="secondary" /> <br />
        </IonCard>

        <IonCard routerLink="/project-detail">
          <img src="recycle.jpg" />
          <IonCardContent>
            Recycle+
          </IonCardContent>
          <IonProgressBar value={0.5} color="primary" /> <br />
          <IonProgressBar value={0.6} color="secondary" /> <br />
        </IonCard>
      </IonSlide>

      <IonSlide>
        <IonCard routerLink="/project-detail">
          <img src="leavesneverdie.jpg" />
          <IonCardContent>
            LeavesNeverDie
          </IonCardContent>
          <IonProgressBar value={0.9} color="primary" /> <br />
          <IonProgressBar value={0.3} color="secondary" /> <br />
        </IonCard>

        <IonCard routerLink="/project-detail">
          <img src="Jiko.jpg" />
          <IonCardContent>
            Jiko
          </IonCardContent>
          <IonProgressBar value={0.3} color="primary" /> <br />
          <IonProgressBar value={0.8} color="secondary" /> <br />
        </IonCard>
      </IonSlide>

      <IonSlide>
        <IonCard routerLink="/project-detail">
          <img src="Jiko.jpg" />
          <IonCardContent>
            Jiko
          </IonCardContent>
          <IonProgressBar value={0.3} color="primary" /> <br />
          <IonProgressBar value={0.8} color="secondary" /> <br />
        </IonCard>

        <IonCard routerLink="/project-detail">
          <img src="Jiko.jpg" />
          <IonCardContent>
            Jiko
          </IonCardContent>
          <IonProgressBar value={0.3} color="primary" /> <br />
          <IonProgressBar value={0.8} color="secondary" /> <br />
        </IonCard>
      </IonSlide>

      <IonSlide>
        <IonCard routerLink="/project-detail">
          <img src="Jiko.jpg" />
          <IonCardContent>
            Jiko
          </IonCardContent>
          <IonProgressBar value={0.3} color="primary" /> <br />
          <IonProgressBar value={0.8} color="secondary" /> <br />
        </IonCard>

        <IonCard routerLink="/project-detail">
          <img src="Jiko.jpg" />
          <IonCardContent>
            Jiko
          </IonCardContent>
          <IonProgressBar value={0.3} color="primary" /> <br />
          <IonProgressBar value={0.8} color="secondary" /> <br />
        </IonCard>
      </IonSlide>

    </IonSlides>

  );
};


export default UtilsFullCategory;
