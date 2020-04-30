import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow
} from '@ionic/react';
import {
  PickerColumn
} from '@ionic/core';

import UtilsPicker from '../utils/UtilsPicker';
import PointInfo from '../utils/PointInfo';

import {infoROI, infoRisque, infoRegion, infoImpact, infoFiltre, infoPopularite, infoProgression} from './InfoRoyaltiesFilter';

import { } from './InfoRoyaltiesFilter';

interface RoyaltiesFilterProps {

}

const RoyaltiesFilter: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [isROEPickerOpen, setROEPickerOpen] = useState(false);
  const [isProgressPickerOpen, setProgressPickerOpen] = useState(false);

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
  const progressValues = {
    name: "progressValues",
    options: [
      { text: "10%", value: "10" },
      { text: "20%", value: "20" },
      { text: "30%", value: "30" },
      { text: "40%", value: "40" },
      { text: "50%", value: "50" },
      { text: "60%", value: "60" },
      { text: "70%", value: "70" },
      { text: "80%", value: "80" },
      { text: "90%", value: "90" },
    ]
  } as PickerColumn;

  return (

    <>
      <IonModal isOpen={showModal}>

        <h2 style={{ margin:20 }}>Filtres</h2>

        <IonItem>
          <IonLabel>Retour sur investissement</IonLabel>
          <PointInfo
            type="info"
            content={infoROI}
            />
        </IonItem>

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

        <IonItem>
          <IonLabel>Progression du projet</IonLabel>
          <PointInfo
            type="info"
            content={infoProgression}
            />
        </IonItem>

        <IonButton onClick={() => { setProgressPickerOpen(true); }} >
          Select progression
        </IonButton>

        <UtilsPicker
          isOpen={isProgressPickerOpen}
          onCancel={ ()=>{ setProgressPickerOpen(false); }}
          onSave={ (_value:any)=> {
            console.log(_value);
            setProgressPickerOpen(false);
          }}
          leftColumn={filterMode}
          rightColumn={progressValues}
        />

        <IonItem>
          <IonLabel>Filtrer les projets par nombre d'investisseurs</IonLabel>
          <PointInfo
            type="info"
            content={infoPopularite}
            />
        </IonItem>

        <IonSegment value="topAll">
          <IonSegmentButton value="topAll">Tous</IonSegmentButton>
          <IonSegmentButton value="top10">Top 10</IonSegmentButton>
          <IonSegmentButton value="top3">Top 3</IonSegmentButton>
        </IonSegment>

        <IonItem>
          <IonLabel>Notation du projet</IonLabel>
          <PointInfo
            type="info"
            content={infoRisque}
            />
        </IonItem>

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

        <IonItem>
          <IonLabel>Impact</IonLabel>
          <PointInfo
            type="info"
            content={infoImpact}
            />
        </IonItem>

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

        <IonItem>
          <IonLabel>Région</IonLabel>
          <PointInfo
            type="info"
            content={infoRegion}
            />
        </IonItem>

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

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton onClick={() => setShowModal(false)}>Appliquer</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => setShowModal(false)}>Annuler</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

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
