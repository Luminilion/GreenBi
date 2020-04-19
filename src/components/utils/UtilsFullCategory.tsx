/*
Describes a full category view on slides.

slidesPerView : indicates the number of slides to be visible at first glance on the screen.
freeMode : gives the option to scroll freely and not always scroll to next element.

*/

import React, { useState } from 'react';

import {
  IonSlides,
  IonSlide,
  IonItem,
  IonCard,
  IonCardContent,
  IonSearchbar
} from "@ionic/react";

interface UtilsFullCategoryProps {
  slidesPerView: number;
  freeMode: boolean;
}



const UtilsFullCategory : React.FC<UtilsFullCategoryProps> = ({ slidesPerView, freeMode }) => {

  const [searchText, setSearchText] = useState('');

  return (

    <IonSlides options={
      {
        direction: 'vertical',
        slidesPerView : slidesPerView,
        freeMode: freeMode
      }
    } >

    <IonSearchbar
      animated
      value={searchText}
      onIonChange={e => setSearchText(e.detail.value!)}
    />

    <IonSlide>
      <IonCard routerLink="/investir">
        <IonItem>
          <img src="eiffel.jpg"></img>
        </IonItem>
        <IonCardContent>
          Investir dans mon super projet de tour eiffel
        </IonCardContent>
      </IonCard>

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

        <IonCard routerLink="/investir">
          <IonItem>
            <img src="eiffel.jpg"></img>
          </IonItem>
          <IonCardContent>
            Investir dans mon super projet de tour eiffel
          </IonCardContent>
        </IonCard>
      </IonSlide>

    </IonSlides>

  );
};


export default UtilsFullCategory;
