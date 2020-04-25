import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

import UtilsPicker from '../utils/UtilsPicker';

interface RoyaltiesFilterProps {

}

const RoyaltiesFilter: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (

    <>
      <IonModal isOpen={showModal}>

        <h2 style={{ margin:20 }}>Filtres</h2>

        <p style={{ margin:20 }}>Retour sur investissement</p>

        <IonButton onClick={() => { setPickerOpen(true); }} >
          Select ROE
        </IonButton>

        <UtilsPicker
          isOpen={isPickerOpen}
          onCancel={ ()=>{ setPickerOpen(false); }}
          onSave={ (_value:any)=> {
            console.log(_value);
            setPickerOpen(false);
          }}
        />

        <p style={{ margin:20 }}>Progression du projet</p>

        <IonSelect
          placeholder="Selectionner la progression"
          >
          <IonSelectOption value={10} >&#60; 10%</IonSelectOption>
          <IonSelectOption value={30} >&#60; 30%</IonSelectOption>
          <IonSelectOption value={50} >&#60; 50%</IonSelectOption>
          <IonSelectOption value={70} >&#60; 70%</IonSelectOption>
          <IonSelectOption value={90} >&#60; 90%</IonSelectOption>
          <IonSelectOption value={100} >Toute progression</IonSelectOption>
        </IonSelect>

        <p style={{ margin:20 }}>Nombres de personnes sur le projet</p>

        <IonSelect
          placeholder="Selectionner le nombre de participants"
          >
          <IonSelectOption value="50-" >Moins de 50</IonSelectOption>
          <IonSelectOption value="100-" >50 à 99</IonSelectOption>
          <IonSelectOption value="500-" >100 à 499</IonSelectOption>
          <IonSelectOption value="500+" >500 ou plus</IonSelectOption>
        </IonSelect>

        <p style={{ margin:20 }}>Notation du projet</p>

        <IonSelect
          multiple
          placeholder="Selectionner la note"
          >
          <IonSelectOption value="A+" >A+</IonSelectOption>
          <IonSelectOption value="A-" >A-</IonSelectOption>
          <IonSelectOption value="B+" >B+</IonSelectOption>
          <IonSelectOption value="B-" >B-</IonSelectOption>
          <IonSelectOption value="C+" >C+</IonSelectOption>
          <IonSelectOption value="C-" >C-</IonSelectOption>
        </IonSelect>

        <p style={{ margin:20 }}>Impact</p>

        <IonSelect
          multiple
          placeholder="Selectionner l'impact"
          >
          <IonSelectOption value={1} >1</IonSelectOption>
          <IonSelectOption value={2} >2</IonSelectOption>
          <IonSelectOption value={3} >3</IonSelectOption>
          <IonSelectOption value={4} >4</IonSelectOption>
          <IonSelectOption value={5} >5</IonSelectOption>
          <IonSelectOption value={6} >6</IonSelectOption>
        </IonSelect>

        <p style={{ margin:20 }}>Région</p>

        <IonSelect
          multiple
          placeholder="Selectionner la région"
          >
          <IonSelectOption value="ARA" >Auvergne-Rhône-Alpes</IonSelectOption>
          <IonSelectOption value="BFC" >Bourgogne-Franche-Comté</IonSelectOption>
          <IonSelectOption value="B" >Bretagne</IonSelectOption>
          <IonSelectOption value="CVL" >Centre-Val de Loire</IonSelectOption>
          <IonSelectOption value="C" >Corse</IonSelectOption>
          <IonSelectOption value="GE" >Grand Est</IonSelectOption>
          <IonSelectOption value="HF" >Hauts-de-France</IonSelectOption>
          <IonSelectOption value="IF" >Île-de-France</IonSelectOption>
          <IonSelectOption value="N" >Normandie</IonSelectOption>
          <IonSelectOption value="NA" >Nouvelle-Aquitaine</IonSelectOption>
          <IonSelectOption value="O" >Occitanie</IonSelectOption>
          <IonSelectOption value="PL" >Pays de la Loire</IonSelectOption>
          <IonSelectOption value="PACA" >Provence-Alpes-Côte d'Azur</IonSelectOption>
          <IonSelectOption value="G" >Guadeloupe</IonSelectOption>
          <IonSelectOption value="M" >Martinique</IonSelectOption>
          <IonSelectOption value="G" >Guyane</IonSelectOption>
          <IonSelectOption value="LR" >La Réunion</IonSelectOption>
          <IonSelectOption value="M" >Mayotte</IonSelectOption>
        </IonSelect>

        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>

      </IonModal>

      <IonButton
        expand="block"
        fill="outline"
        shape="round"
        onClick={() => setShowModal(true)}>
        Filter
      </IonButton>
    </>
  );
};

export default RoyaltiesFilter;
