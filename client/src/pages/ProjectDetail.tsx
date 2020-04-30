import React from 'react';
import { IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonButton,
IonItem,
IonGrid,
IonCol,
IonRow,
IonProgressBar,
IonLabel,
IonButtons,
IonBackButton,
IonIcon
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import ProjectDetailEntry from '../components/ProjectDetail/ProjectDetailEntry';

import projectData from '../data/ProjectData';
import { alertCircle } from "ionicons/icons";

import './ProjectDetail.css';


interface ProjectDetailProps extends RouteComponentProps<{
projectId: string;
projectType: string;
}> {}

const ProjectDetail: React.FC<ProjectDetailProps> = ({match}) => {

  const nexturl = '/levee-fond/'+
    match.params.projectType + '/' +
    match.params.projectId + '/';

  let idInt = parseInt(match.params.projectId);
  const project = projectData[match.params.projectType].find(e => e.id == idInt);

return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{project.title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent class="project-detail">
          <IonGrid>

              <IonRow>

                  <IonCol>
                      <IonItem>
                          <img src={project.img}></img>
                      </IonItem>
                  </IonCol>

                  <IonCol>
                      <IonItem>Type de produit : {match.params.projectType}</IonItem>
                      <IonItem>Nom du projet : {project.title}</IonItem>
                      <IonItem class="risk-container">
                        <IonIcon icon={alertCircle} slot="start"/>
                        <IonLabel>Risque : elevé</IonLabel>
                      </IonItem>
                  </IonCol>

              </IonRow>

              <IonRow style={{paddingTop:20}}>
              <IonItem>
              Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem
              Lorem Ipsum set dolorem Lorem Ipsu
              </IonItem><br />
              </IonRow>

              <ProjectDetailEntry
                projectId={idInt}
                productType={match.params.projectType}
              />

              <IonRow>
                  <IonCol> <IonButton routerLink={nexturl} size="small" expand="block">Participer</IonButton></IonCol>
              </IonRow>

          </IonGrid>
    </IonContent>
  </IonPage>
);
};

export default ProjectDetail;
