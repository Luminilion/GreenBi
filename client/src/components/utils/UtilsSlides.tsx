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
  projects: Array<any>;
}



const UtilsSlides : React.FC<UtilsSlidesProps> = ({ slidesPerView, moreLink, projects }) => {

  const items = []

  for (const [index, value] of projects.entries()) {
    items.push(
    <IonSlide>
      <IonCard routerLink="/investir">
        <img src={value.img}></img>
        <IonCardContent>
          {value.title}
        </IonCardContent>
        <IonProgressBar value={0.2} color="primary" /> <br />
        <IonProgressBar value={0.7} color="secondary" /> <br />
      </IonCard>
    </IonSlide>
      )
  }

  return (
      
      <IonSlides  options={{ slidesPerView: slidesPerView }}>
        {items}


        <IonSlide>
          <IonItem routerLink={moreLink} >
            <IonIcon icon={arrowForward} />
          </IonItem>
        </IonSlide>

      </IonSlides>

  );
};


export default UtilsSlides;
