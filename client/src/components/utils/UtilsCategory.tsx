/*
Describes a category-view of investment products as a sneak-peak.

name : The name of the product.
link : The category offers a redirection to its main page of products.
slidesPerView : number of visible slides at first glance on on the category.

*/

import React from 'react';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

import UtilsSlides from './UtilsSlides';

interface UtilsCategoryProps {
  slidesPerView: number;
  name: string;
  description: string;
  moreLink: string;
  projects: Array<Object>;
}



const UtilsCategory : React.FC<UtilsCategoryProps> = ({ slidesPerView, name, description, moreLink, projects }) => {
  return (

    <IonCard>

      <IonCardHeader>
          <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
          {description}
      </IonCardContent>

      <UtilsSlides
        slidesPerView={slidesPerView}
        moreLink={moreLink}
        projects={projects}
      />

    </IonCard>

  );
};


export default UtilsCategory;
