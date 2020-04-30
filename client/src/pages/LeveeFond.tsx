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
  IonAlert,
} from '@ionic/react';

import './LeveeFond.css';
import { RouteComponentProps, useHistory} from 'react-router-dom';
import Histogram from 'react-chart-histogram';

interface LeveeFondProps extends RouteComponentProps<{
    projectType: string;
    projectId: string;
  }> {}

const LeveeFond: React.FC<LeveeFondProps> = ({match}) => {
    const nexturl = '/info-personnelle/'+ 
        match.params.projectType + '/' + 
        match.params.projectId + '/';
    const [montantProjet, setMontantProjet] = React.useState<number>(0);
    const history = useHistory();
    const rendement = 5

    const [data, setData] = React.useState([0,0,0,0,0,0,0,0,0,0]);
    const [showAlert, setShowAlert] = React.useState(false);
    const labels = ['2020', '', '','2021', '', '','2022', '', '2023'];

    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF', animation: true };

    const handleAmount = (e) => {
      var newMontantProjet = parseInt(e.detail.value!, 10)
      setMontantProjet(newMontantProjet);
      var newData = [];
      for(var i=0;i<9;i++){
        var x;
        if(i %3 == 0){
          x = 0.7;
        }
        if(i %3 == 1){
          x = 1.4;
        }
        if(i %3 == 2){
          x = 0.9;
        }
        var value = x * ( newMontantProjet * Math.pow((1 + rendement/100),i/3) - newMontantProjet );
        newData.push(value)
      }
      setData(newData);
    };
    const handleParticipateButton = (e) => {
      setShowAlert(true);
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
                   Taux de rendement estimé
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
        <IonButton onClick={handleParticipateButton}   class="participate-button center">Participer</IonButton>
      
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Attention'}
          message={'Avant de pouvoir continuer, nous avons besoins de quelques informations personnelles'}
          buttons={[{
            text: 'Accepter',
            role: 'accept',
            cssClass: 'secondary',
            handler: () => {
              history.push(nexturl + montantProjet);
            }
          }]}
        />
      </IonContent>
    </IonPage>
  );
};

export default LeveeFond;
