  import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonProgressBar,
  IonLabel,
  IonItemDivider,
  IonInput,
  IonToggle,
  IonCheckbox,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

import projectData from '../data/ProjectData';

import './ProjectDetail.css';
import './styles.css';

import { star } from 'ionicons/icons';

interface ProjectDetailProps extends RouteComponentProps<{
  id: string;
  product: string;
}> {}

const ProjectDetail: React.FC<ProjectDetailProps> = ({match}) => {

  let projects = projectData[match.params.product];
  const project = projects.find(e=>e.id==match.params.id);

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

      <IonContent>

            <IonGrid>
                <IonRow>
                    <IonCol>

                        <IonItem>
                            <img src={project.img}></img>

                        </IonItem>
                        <IonItem><IonLabel>
                        <IonIcon icon={star}></IonIcon>
                        <IonIcon icon={star}></IonIcon>
                        <IonIcon icon={star}></IonIcon>
                        <IonIcon icon={star}></IonIcon>
                            </IonLabel></IonItem>

                    </IonCol>
                    <IonCol>
                        <br />
                        <br />
                        <IonProgressBar value={0.72}></IonProgressBar><br />
                        72 000 / 100 000
                        <br />

                        <IonItem>
                            Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem
                            Lorem Ipsum set dolorem Lorem Ipsu

                        </IonItem>
                        <br />

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol><IonItem><IonLabel>78 personnes sur ce projet</IonLabel></IonItem> </IonCol>
                    <IonCol> <IonButton href="/levee-fond" size="small" expand="block">Participer</IonButton></IonCol>
                </IonRow>
            </IonGrid>



      </IonContent>
    </IonPage>
  );
};

export default ProjectDetail;
