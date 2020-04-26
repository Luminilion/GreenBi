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

  const projects = [
    {src: "eiffel.jpg", name: "EcoEiffel", projectProgress: 0.2, projectFund: 0.7},
    {src: "recycle.jpg", name: "Recycle+", projectProgress: 0.5, projectFund: 0.6},
    {src: "leavesneverdie.jpg", name: "LeavesNeverDie", projectProgress: 0.8, projectFund: 0.4},
    {src: "jiko.jpg", name: "Jiko", projectProgress: 0.8, projectFund: 0.9},
  ]

  return (

      <IonSlides  options={{ slidesPerView: slidesPerView }}>

        {projects.map( (project, index) => {
          return (
            <IonSlide>
              <IonCard routerLink="/project-detail">
                <img src={project.src} alt={project.name} />
                <IonCardContent>
                  {project.name}
                </IonCardContent>
                <IonProgressBar value={project.projectProgress} color="primary" /> <br />
                <IonProgressBar value={project.projectFund} color="secondary" /> <br />
              </IonCard>
            </IonSlide>
          )
        })}

        <IonSlide>
          <IonItem routerLink={moreLink} >
            <IonIcon icon={arrowForward} />
          </IonItem>
        </IonSlide>
        
      </IonSlides>

  );
};


export default UtilsSlides;
