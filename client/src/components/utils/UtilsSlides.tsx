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
  IonProgressBar,
} from "@ionic/react";

import { arrowForward } from 'ionicons/icons';

import './UtilsSlides.css';

interface UtilsSlidesProps {
  slidesPerView: number;
  moreLink: string;
}



const UtilsSlides : React.FC<UtilsSlidesProps> = ({ slidesPerView, moreLink }) => {
  return (

      <IonSlides  options={{ slidesPerView: slidesPerView }}>

        <IonSlide>
          <IonCard routerLink="/investir">
            <img src="eiffel.jpg"></img>
            <IonCardContent>
              EcoEiffel
            </IonCardContent>
            <IonProgressBar value={0.2} color="primary" /> <br />
            <IonProgressBar value={0.7} color="secondary" /> <br />
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard routerLink="/investir">
            <img src="recycle.jpg"></img>
            <IonCardContent>
              Recycle+
            </IonCardContent>
            <IonProgressBar value={0.5} color="primary" /> <br />
            <IonProgressBar value={0.6} color="secondary" /> <br />
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard routerLink="/investir">
            <img src="leavesneverdie.jpg"></img>
            <IonCardContent>
              LeavesNeverDie
            </IonCardContent>
            <IonProgressBar value={0.9} color="primary" /> <br />
            <IonProgressBar value={0.3} color="secondary" /> <br />
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard routerLink="/investir">
            <img src="Jiko.jpg"></img>
            <IonCardContent>
              Jiko
            </IonCardContent>
            <IonProgressBar value={0.3} color="primary" /> <br />
            <IonProgressBar value={0.8} color="secondary" /> <br />
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
