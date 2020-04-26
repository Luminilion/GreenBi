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

import RoyaltiesDetails from '../Royalties/RoyaltiesDetails';
import StocksDetails from '../Stocks/StocksDetails';

import projectData from "../../data/ProjectData";

interface UtilsFullCategoryProps {
  slidesPerView: number;
  freeMode: boolean;
  product: string;
}


const UtilsFullCategory : React.FC<UtilsFullCategoryProps> = ({ slidesPerView, freeMode, product }) => {

  const projects = [];
  let temp = projectData[product];
  for (let i =0; i < temp.length; i=i+2) {
    projects.push([
      temp[i], temp[i+1]
    ]);
  }

  console.log(projects)

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
                <IonCard routerLink="/project-detail">
                  <img src={p.img} alt={p.title}/>
                  <IonCardContent>
                    {p.title}
                  </IonCardContent>

                  {(() => {
                    switch (product) {
                      case "stocks": return (
                        <StocksDetails direction={p.direction} value={p.value} />
                      );
                      case "royalties" : return (
                        <RoyaltiesDetails progress={p.progress} fund={p.fund} />
                      );
                      default : return ( <></> );
                    }
                  })()}

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
