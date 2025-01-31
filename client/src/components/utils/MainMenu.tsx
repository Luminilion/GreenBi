import React from "react";
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonItem,
  IonList,
  IonIcon,
  IonLabel,
} from "@ionic/react"
import { home, trendingUp, settings, peopleCircle, wallet, school } from 'ionicons/icons';

const MainMenu: React.FC = () => {

  const menuLinks = [
    { text: "Mainpage", icon:home, link: "/main" },
    { text: "Action", icon:trendingUp, link: "/stocks" },
    { text: "Royalties", icon:peopleCircle, link: "/royalties" },
    { text: "Portfolio", icon:wallet, link: "/portfolio" },
    { text: "Académie", icon:school, link: "/academy" },
    { text: "Paramètres", icon:settings, link: "/settings" },
  ]

  return (
    <>
      <IonMenu contentId="main">

        <IonHeader>
          <IonToolbar>
            <IonTitle>GreenBi</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>

            { menuLinks.map((menuItem, index) => {
              return (
                  <IonMenuToggle key={index}>
                    <IonItem href={menuItem.link} >
                     <IonIcon slot="start" icon={menuItem.icon} />
                     <IonLabel>{menuItem.text}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
              )})
            }

          </IonList>
        </IonContent>

      </IonMenu>
    </>
  );
};

export default MainMenu;
