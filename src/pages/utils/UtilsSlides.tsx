import React from 'react';

import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface ContainerProps {
  name: string;
}



const UtilsSlides : React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonCard href="/royalties">

      <IonCardHeader>
          <IonCardSubtitle>{name}</IonCardSubtitle>
          <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
          Les {name}, c'est vraiment trop super. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, velit id tincidunt pulvinar, felis odio blandit mi, id commodo met
      </IonCardContent>

      <IonSlides  options={{slidesPerView:2.5}}>

        <IonSlide>
          <IonCard href="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard href="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard href="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>

        <IonSlide>
          <IonCard href="/investir">
            <IonItem>
              <img src="eiffel.jpg"></img>
            </IonItem>
            <IonCardContent>
              Investir dans mon super projet de tour eiffel
            </IonCardContent>
          </IonCard>
        </IonSlide>
        
      </IonSlides>
    </IonCard>

  );
};


export default UtilsSlides;
