import React, {useState} from 'react';
import {
  IonPage,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonHeader,
} from '@ionic/react';

const Signup: React.FC = () => {

  const [checkCGU, setCheckCGU] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{padding:30}} >Signup</IonTitle>
          <IonButtons slot="start" >
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <form>
          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Nom</IonLabel>
            <IonInput type="text" clearInput required/>
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Prénom</IonLabel>
            <IonInput type="text" clearInput required/>
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Pseudo</IonLabel>
            <IonInput type="text" clearInput required/>
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Adresse email</IonLabel>
            <IonInput type="email" clearInput inputMode="email" required />
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Mot de passe</IonLabel>
            <IonInput type="password" clearInput required />
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Confirmation de mot de passe</IonLabel>
            <IonInput type="password" clearInput required />
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Numéro de téléphone</IonLabel>
            <IonInput type="tel" clearInput inputMode="tel" required />
          </IonItem>

          <IonItem style={{padding:10}}>
            <IonCheckbox checked={checkCGU} />
            <IonLabel style={{margin: 30}}>J'accepte les CGU GreenBi</IonLabel>
          </IonItem>

          <IonButton expand="block" type="submit">Create Account</IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default Signup;
