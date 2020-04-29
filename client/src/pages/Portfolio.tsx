import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonAvatar,
  IonListHeader,
} from '@ionic/react';

import PortfolioEntry from '../components/portfolio/PortfolioEntry';

import './Portfolio.css';
import portfolioData from '../data/PortfolioData';

const Portfolio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portfolio</IonTitle>
          <IonButtons slot="start" >
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard><br />
        <b>MON PORTFOLIO</b> <br />
        <br />
        Vous avez gagné 253.53 € <br />
        C'est vraiment beaucoup beaucoup d'argent
        </IonCard>
      <IonList>
      <IonListHeader>
        Mes stocks
      </IonListHeader>

      {
        portfolioData.stocks.map( (stock,index) => {
          return (
            <>
              <PortfolioEntry
                productType="stocks"
                projectId={stock.id}
              />
            </>
          );
        })
      }
    </IonList>
    <IonList>
      <IonListHeader>
        Mes royalties
      </IonListHeader>
      {
        portfolioData.royalties.map( (royalty,index) => {
          return (<>
            <PortfolioEntry
              productType="royalties"
              projectId={royalty.id}
            />
          </>);
        })
      }
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Portfolio;
