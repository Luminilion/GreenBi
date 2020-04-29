import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

import './LeveeFond.css';
import { RouteComponentProps} from 'react-router-dom';
import Histogram from 'react-chart-histogram';

interface LeveeFondProps extends RouteComponentProps<{
    projectType: string;
    projectId: string;
  }> {}

const LeveeFond: React.FC<LeveeFondProps> = ({match}) => {
    const nexturl = '/document-administratif/'+ 
        match.params.projectType + '/' + 
        match.params.projectId + '/';
    const [montantProjet, setMontantProjet] = React.useState<number>(0);

    const rendement = 5

    const [data, setData] = React.useState([0,0,0,0,0,0,0,0,0,0]);
    const labels = ['2020', '', '','2023', '', '','2026', '', '2028'];

    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF', animation: true };

    const handleAmount = (e) => {
      var newMontantProjet = parseInt(e.detail.value!, 10)
      setMontantProjet(newMontantProjet);
      var newData = [];
      for(var i=0;i<9;i++){
        var value = newMontantProjet * Math.pow((1 + rendement/100),i) - newMontantProjet;
        newData.push(value)
      }
      setData(newData);
    };
  
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
          <IonTitle>Levée de Fond</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="levee-fond">
        <IonGrid>
            <IonRow>
                <IonCol>
                    Quel Montant souhaitez vous allouer à ce projet ?
                </IonCol>
                <IonCol>
                    <IonCard>
                        <IonInput placeholder="Enter Input"
                            onIonChange={handleAmount}
                        ></IonInput>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                   Taux de rendement du projet
                </IonCol>
                <IonCol>
                    <IonCard class="rendement-card">
                        {rendement} %
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
        <div className="histogram-container">
        <Histogram
          xLabels={labels}
          yValues={data}
          options={options}
      />
      
        </div>
          
        <IonButton routerLink={nexturl + montantProjet} class="participate-button center">Participer</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LeveeFond;
