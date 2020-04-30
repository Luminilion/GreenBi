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
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

import projectData from '../data/ProjectData';

import './ProjectDetail.css';


interface ProjectDetailProps extends RouteComponentProps<{
  projectId: string;
  projectType: string;
}> {}

const ProjectDetail: React.FC<ProjectDetailProps> = ({match}) => {

  const nexturl = '/levee-fond/'+
    match.params.projectType + '/' +
    match.params.projectId + '/';

  const getProject = function(type, id){
      let idInt = parseInt(id);
      if(type == "stocks"){
          return projectData.stocks.find(e => e.id == idInt);
      }else{
          return projectData.royalties.find(e => e.id == idInt);
      }
  };
  
  const project = getProject(match.params.projectType,match.params.projectId);

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

          <div className="project-type">
            <h2>{match.params.projectType}</h2>
          </div>

            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <img src={project.img}></img>
                        </IonItem>
                        <IonItem class="risk-container">
                          Risque elevé
                        </IonItem>
                    </IonCol>

                    <IonCol>
                        <div className="funds">
                          <IonProgressBar value={0.72} /><br />
                          <p>72 000 / 100 000</p>
                        </div>

                        <IonItem>
                            Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem
                            Lorem Ipsum set dolorem Lorem Ipsu
                        </IonItem><br />
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol><IonItem><IonLabel>78 personnes sur ce projet</IonLabel></IonItem> </IonCol>
                    <IonCol> <IonButton routerLink={nexturl} size="small" expand="block">Participer</IonButton></IonCol>
                </IonRow>
            </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default ProjectDetail;
