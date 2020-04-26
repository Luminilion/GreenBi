import React from 'react';
import {
  IonPage,
  IonImg,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonContent>

        <IonImg src="assets/icon/favicon.png" />
        <br />

        <form>
          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Adresse email</IonLabel>
            <IonInput type="email" clearInput inputmode="email" required/>
          </IonItem>

          <IonItem style={{margin:20}}>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" clearInput required/>
          </IonItem>

          <IonButton expand="block" routerLink='main'>Login</IonButton>
          <br />
        </form>

        <p style={{margin:20}} >Vous navez pas de compte ? Créez-vous un compte !</p>

        <IonButton expand="block" routerLink="/signup" >Signup</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Login;
