import React from 'react';

import {
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react';

import projectData from '../../data/ProjectData';
import portfolioData from '../../data/PortfolioData';

import '../../pages/Portfolio/Portfolio.css'

interface PortfolioEntryProps {
  productType: string;
  projectId: number;
}

const PortfolioEntry : React.FC<PortfolioEntryProps> = ({productType, projectId}) => {

  const project = projectData[productType].find(e => e.id == projectId);
  const investment = portfolioData[productType].find(e => e.id == projectId);

  switch (productType) {

    case "royalties": return (
      <IonItem routerLink="/portfolio-detail" class="portfolio-item" disabled={!investment.active}>
          <IonAvatar slot="start">
            <img src={project.img} />
          </IonAvatar>
          <IonLabel>
            <h2>{project.title}</h2>
            <p>{investment.invest_amount + " €"}</p>
          </IonLabel>
          <IonLabel>
            <h2></h2>
            <p>{investment.refund_amount + " €"} ( {investment.refund_percentage + " %"} )</p>
          </IonLabel>
       </IonItem>
    );

    case "stocks": return (
      <IonItem routerLink="/portfolio-detail" class="portfolio-item" disabled={!investment.active}>
          <IonAvatar slot="start">
            <img src={project.img} />
          </IonAvatar>
          <IonLabel>
            <h2>{project.title}</h2>
            <h3>{(investment.croissance > 0)?"+" : ""} { investment.croissance + " %"}</h3>
            <p>{investment.buy_price + " €"}</p>
          </IonLabel>
       </IonItem>
    )
  };
};

export default PortfolioEntry;
