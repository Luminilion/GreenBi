  import React from 'react';
import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonSlides,
  IonSlide,
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
} from '@ionic/react';

import './ProjectDetail.css';
import './styles.css';

import { trash, share, playCircleOutline, heart, close, logoEuro, star, starOutline} from 'ionicons/icons';

import {loadStripe} from '@stripe/stripe-js';



const ProjectDetail: React.FC = () => {
    const segment = "outline";
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Royalties</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

            <IonGrid>
                <IonRow>
                    <IonCol>

                        <IonItem  class="project-detail">
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
