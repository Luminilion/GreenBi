import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonItem,
  IonButton,
  IonList,
  IonItemDivider,
  IonInput,
} from '@ionic/react';

import './PersonalInfo.css';
import { RouteComponentProps} from 'react-router-dom';
import projectData from '../data/ProjectData';

import { arrowForward, checkmark } from 'ionicons/icons';
interface PersonalInfoProps extends RouteComponentProps<{
  projectType: string;
  projectId: string;
  amount: string
}> {}


const PersonalInfo: React.FC<PersonalInfoProps> = ({match}) => {
    const nexturl = '/document-administratif/' +
    match.params.projectType + '/' +
    match.params.projectId + '/' +
    match.params.amount;
  const getProjectImage = function(type, id){
    let idInt = parseInt(id);
    if(type == "stocks"){
        return projectData.stocks[idInt].img;
    }else if(type == "royalties"){
        return projectData.royalties[idInt].img;
    }else{
        return "erreur";
    }
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
          <IonTitle>Infos Personnelles</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="personal-info">
      <IonList class="form-container">
          <IonItemDivider><b>Date et Lieu de Naissance</b></IonItemDivider>
          <IonItem>
            <IonInput placeholder="Date de Naissance"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Lieu de Naissance"></IonInput>
          </IonItem>
          <IonItemDivider><b>Adresse Postale</b></IonItemDivider>
          <IonItem>
            <IonInput placeholder="Adresse"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="number" placeholder="Code Postal"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Ville"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Pays"></IonInput>
          </IonItem>

         
          </IonList>
        <div className="bouton-container">
            <IonButton routerLink={nexturl}>Continuer</IonButton>
      
        </div>
    </IonContent>
    </IonPage>
  );
};

export default PersonalInfo;
