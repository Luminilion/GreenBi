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
  IonBackButton,
  IonButtons,
} from '@ionic/react';

import './ProjectDetail.css';
import './styles.css';

import { star } from 'ionicons/icons';


const ProjectDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Royalties</IonTitle>
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
                            <img src="eiffel.jpg"></img>
                        </IonItem>
                        <IonItem><IonLabel>
                        <IonIcon icon={star}></IonIcon>
                        <IonIcon icon={star}></IonIcon>
                        <IonIcon icon={star}></IonIcon>
                        <IonIcon icon={star}></IonIcon>
                            </IonLabel></IonItem>

                    </IonCol>
                    <IonCol><br />
                                        <br />
                        <IonProgressBar value={0.72}></IonProgressBar><br />
                        72 000 / 100 000 <br />

                        <IonItem>
                            Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem Lorem Ipsum set dolorem
                            Lorem Ipsum set dolorem Lorem Ipsu

                        </IonItem>
                        <br />

                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol><IonItem><IonLabel>78 personnes sur ce projet</IonLabel></IonItem> </IonCol>
                    <IonCol> <IonButton size="small" expand="block">Participer</IonButton></IonCol>
                </IonRow>
            </IonGrid>



      </IonContent>
    </IonPage>
  );
};

export default ProjectDetail;
