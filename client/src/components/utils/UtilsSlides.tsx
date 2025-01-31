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

import RoyaltiesDetails from '../Royalties/RoyaltiesDetails';
import StocksDetails from '../Stocks/StocksDetails';

import { arrowForward } from 'ionicons/icons';
import projectData from '../../data/ProjectData';

import './UtilsSlides.css';


interface UtilsSlidesProps {
  slidesPerView: number;
  moreLink: string;
  product: string;
}


const UtilsSlides : React.FC<UtilsSlidesProps> = ({ slidesPerView, moreLink, product }) => {

  const projects = projectData[product];

  return (

      <IonSlides  
        scrollbar={true}
        options={{ slidesPerView: slidesPerView }
      }>

        {projects.map( (project, index) => {
          let route = "/project-detail/"+product+'/'+project.id;
          return (
            <IonSlide class="slide-project">
              <IonCard routerLink={route}
                class="project-card"
              >
                <img src={project.img} alt={project.title} />
                <IonCardContent>
                  {project.title}
                </IonCardContent>

                {(() => {
                  switch (product) {
                    case "stocks": return (
                      <StocksDetails direction={project.direction} value={project.value} />
                    );
                    case "royalties" : return (
                      <RoyaltiesDetails progress={project.progress} fund={project.fund} />
                    );
                    default : return ( <></> );
                  }
                })()}

              </IonCard>
            </IonSlide>
          )
        })}

        <IonSlide className="slide-arrow">
          <IonItem routerLink={moreLink} >
            <IonIcon icon={arrowForward} />
          </IonItem>
        </IonSlide>

      </IonSlides>

  );
};


export default UtilsSlides;
