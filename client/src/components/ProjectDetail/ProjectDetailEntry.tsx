import React from 'react';

import {
  IonCol,
  IonProgressBar,
  IonItem,
  IonRow,
} from '@ionic/react';

import projectData from '../../data/ProjectData';

interface ProjectDetailEntryProps {
  productType: string;
  projectId: number;
}

const ProjectDetailEntry : React.FC<ProjectDetailEntryProps> = ({ productType, projectId }) => {

  const project = projectData[productType].find(e => e.id == projectId);

  switch (productType) {

    case "stocks" : return (
      <IonRow>

      </IonRow>
    );

    case "royalties" : return (
      <IonRow>
        <IonCol>
          <IonProgressBar value={project.progress} style={{marginLeft:15}}/><br />
          <IonItem>72 000 / 100 000</IonItem>
          <IonProgressBar value={project.fund} style={{marginLeft:15}} color="secondary"/><br />
          <IonItem>10 230 / 58 000 €</IonItem>
        </IonCol>

        <IonCol>
          <IonItem>78 investisseurs sur ce projet</IonItem>
        </IonCol>
      </IonRow>
    );

  }
};

export default ProjectDetailEntry;
