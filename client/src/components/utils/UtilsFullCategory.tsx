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
  IonGrid,
  IonCol,
  IonRow,
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
    if (temp[i+1]==undefined) {
      projects.push([ temp[i] ]);
    } else {
      projects.push([ temp[i], temp[i+1] ]);
    }
  }

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
          <IonGrid>
          <IonRow>

            {bothProjects.map( p => {
              let route = "/project-detail/"+product+'/'+p.id;
              return(
                <IonCol size="6">
                <IonCard routerLink={route}>
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
                </IonCol>
              );
            })}

          </IonRow>
          </IonGrid>
          </IonSlide>
        );
      })}

    </IonSlides>

  );
};


export default UtilsFullCategory;
