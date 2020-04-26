/*
Describes a full category view on slides.

slidesPerView : indicates the number of slides to be visible at first glance on the screen.
freeMode : gives the option to scroll freely and not always scroll to next element.

*/

import React from 'react';

import {
  IonSlides,
  IonSlide,
  IonCard,
  IonCardContent,
  IonProgressBar,
} from "@ionic/react";

interface UtilsFullCategoryProps {
  slidesPerView: number;
  freeMode: boolean;
}



const UtilsFullCategory : React.FC<UtilsFullCategoryProps> = ({ slidesPerView, freeMode }) => {

  const projects = [
    [{src: "eiffel.jpg", name: "EcoEiffel", projectProgress: 0.2, projectFund: 0.7},
    {src: "recycle.jpg", name: "Recycle+", projectProgress: 0.5, projectFund: 0.6}],
    [{src: "leavesneverdie.jpg", name: "LeavesNeverDie", projectProgress: 0.8, projectFund: 0.4},
    {src: "jiko.jpg", name: "Jiko", projectProgress: 0.8, projectFund: 0.9}],
    [{src: "jiko.jpg", name: "Jiko", projectProgress: 0.8, projectFund: 0.9},
    {src: "jiko.jpg", name: "Jiko", projectProgress: 0.8, projectFund: 0.9}],
    [{src: "jiko.jpg", name: "Jiko", projectProgress: 0.8, projectFund: 0.9},
    {src: "jiko.jpg", name: "Jiko", projectProgress: 0.8, projectFund: 0.9}],
  ]

  return (

    <IonSlides options={
      {
        direction: 'vertical',
        slidesPerView : slidesPerView,
        freeMode: freeMode
      }
    } >

      {projects.map( bothProjects => {
        return(
          <IonSlide>

            {bothProjects.map( p => {
              return(
                <IonCard routerLink="/investir">
                  <img src={p.src} alt={p.name}/>
                  <IonCardContent>
                    {p.name}
                  </IonCardContent>
                  <IonProgressBar value={p.projectProgress} color="primary" /> <br />
                  <IonProgressBar value={p.projectFund} color="secondary" /> <br />
                </IonCard>
              );
            })}

          </IonSlide>
        );
      })}

    </IonSlides>

  );
};


export default UtilsFullCategory;
