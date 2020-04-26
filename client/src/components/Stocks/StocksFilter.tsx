import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonInput,
} from '@ionic/react';
import {
  PickerColumn
} from '@ionic/core';

import UtilsPicker from '../utils/UtilsPicker';

interface StocksFilterProps {

}

const StocksFilter: React.FC<StocksFilterProps> = () => {

  const [showModal, setShowModal] = useState(false);
  const [isROEPickerOpen, setROEPickerOpen] = useState(false);
  const [isValorisationPickerOpen, setValorisationPickerOpen] = useState(false);

  const filterMode = {
    name: "filterMode",
    options: [
      { text: "<", value: "lessThan" },
      { text: ">", value: "moreThan" }
    ]
  } as PickerColumn;
  const roeValues = {
    name: "ROEvalues",
    options: [
      { text: "3%", value: "3" },
      { text: "5%", value: "5" },
      { text: "7%", value: "7" },
      { text: "10%", value: "10" },
    ]
  } as PickerColumn;
  const valorisationValues = {
    name: "valorisationValues",
    options: [
      { text: "10 k€", value: "10" },
      { text: "20 k€", value: "20" },
      { text: "50 k€", value: "50" },
      { text: "100 k€", value: "100" },
    ]
  } as PickerColumn;

  return (

    <>
      <IonModal isOpen={showModal}>

        <h2 style={{ margin:20 }}>Filtres</h2>

        <p style={{ margin:20 }}>Retour sur investissement</p>

        <IonButton onClick={() => { setROEPickerOpen(true); }} >
          Select ROE
        </IonButton>

        <UtilsPicker
          isOpen={isROEPickerOpen}
          onCancel={ ()=>{ setROEPickerOpen(false); }}
          onSave={ (_value:any)=> {
            console.log(_value);
            setROEPickerOpen(false);
          }}
          leftColumn={filterMode}
          rightColumn={roeValues}
        />

        <p style={{ margin:20 }}>Valorisation</p>

        <IonButton onClick={() => { setValorisationPickerOpen(true); }} >
          Select progression
        </IonButton>

        <UtilsPicker
          isOpen={isValorisationPickerOpen}
          onCancel={ ()=>{ setValorisationPickerOpen(false); }}
          onSave={ (_value:any)=> {
            console.log(_value);
            setValorisationPickerOpen(false);
          }}
          leftColumn={filterMode}
          rightColumn={valorisationValues}
        />

        <p style={{ margin:20 }}>Dilution du capital (valeur d'une action)</p>

        <IonSelect
          interface="popover"
          placeholder="Valeur de comparaison"
          >
          <IonSelectOption value="<" >&#60;</IonSelectOption>
          <IonSelectOption value=">" >&#62;</IonSelectOption>
        </IonSelect>

        <IonInput
          type="number"
          inputmode="decimal"
          max="100"
          min="0"
          placeholder="--"
          onIonChange={
              e => {}
          }
        />

        <p>% de dilution</p>

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

export default StocksFilter;
