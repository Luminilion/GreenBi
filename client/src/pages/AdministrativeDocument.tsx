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
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonLabel,
  IonText,
} from '@ionic/react';


import { home, trendingUp, settings, peopleCircle, wallet, school, cameraOutline } from 'ionicons/icons';

import './AdministrativeDocument.css';

const DocumentPicker = () => (
    <div id="documentPicker" className="">
        Document Picker
    </div>
)

const AdministrativeDocument: React.FC = () => {

    const [showDocumentPicker, setShowDocumentPicker] = React.useState(false);
    const [showDocumentInfo, setShowDocumentInfo] = React.useState(true);
    const [showButton, setShowButton] = React.useState(true);
    const [showDocumentContainer, setShowDocumentContainer] = React.useState(false);
    
    const phonePersonalDocuments = ["jiko.jpg", "passport.png", "recycle.jpg"];

    const chooseDocument = async (indexDocument) => {
        

        setShowDocumentPicker(false);
        setShowButton(false);
        setShowDocumentInfo(true);
        setShowDocumentContainer(true);
        console.log(indexDocument);
    };
    const onButtonClick = async () => {
        setShowDocumentInfo(false);
        setShowDocumentPicker(true);
        
    };
    const button1 = (
        <IonItem class="button-container">
            <IonButton onClick = {() => onButtonClick()}>Carte d'identité </IonButton> 
            <IonIcon icon={cameraOutline} />
        </IonItem>

    );
    const button2 = (
        <IonItem class="button-container">
            <IonButton onClick = {() => onButtonClick()}>Passeport </IonButton> 
            <IonIcon icon={cameraOutline} />
        </IonItem>
    );
    var documentContainer = (
        <IonItem class="document-container">
            <img src="passport.png" />
        </IonItem>
    );
    const documentPicker = (
    <IonCard class="document-pick">
        <IonSlides options={{ slidesPerView: 2 }}>
            { phonePersonalDocuments.map((document, index) => {
            return (
                <IonSlide onClick={() => chooseDocument(index)}>
                    <img src={document} />
                </IonSlide>
            )})
            }
        </IonSlides>

    </IonCard>
    );

    const documentInfo = (
        <IonItem class="document-info" color="success">
            <IonText>
                La photo enregistrée sera examinée par nos services dans un delai de 48h
        
            </IonText>
        </IonItem>
    );
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
                <IonTitle>Documents Administratifs</IonTitle>
            </IonToolbar>
      </IonHeader>

      <IonContent>
        <br />
        <IonAvatar class="avatar ion-justify-content-center">
            <img src="avatar.png" />
        </IonAvatar>


        
        { showButton ?  button1 : null }
        { showButton ?  button2 : null }
        { showDocumentContainer ?  documentContainer : null }
        { showDocumentInfo ?  documentInfo : null }
        { showDocumentPicker ?  documentPicker : null }

        
      </IonContent>
    </IonPage>
  );
};

export default AdministrativeDocument;
