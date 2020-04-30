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
  IonGrid,
  IonCol,
  IonRow,
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
      <div className="graph-container">
            <img src="graphique_portfolio.png"></img>
              </div>

      <IonList>
      <IonListHeader>
        Mes actions
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
