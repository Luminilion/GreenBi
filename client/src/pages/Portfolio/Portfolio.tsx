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

import PortfolioEntry from '../../components/portfolio/PortfolioEntry';
import PointInfo from '../../components/utils/PointInfo';

import './Portfolio.css';
import portfolioData from '../../data/PortfolioData';
import infoPortfolio from './InfoPortfolio';

const Portfolio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portfolio</IonTitle>
          <IonMenuButton slot="start"/>
          <IonButtons slot="end">
            <PointInfo
              type="info"
              content={infoPortfolio}
              />
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
        Mes Actions
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
