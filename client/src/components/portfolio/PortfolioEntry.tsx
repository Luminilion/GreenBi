import React from 'react';

import {
  IonItem,
  IonAvatar,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';

import projectData from '../../data/ProjectData';
import portfolioData from '../../data/PortfolioData';
import {chevronForwardCircleOutline} from 'ionicons/icons';

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
          <IonGrid>
            <IonRow>
              <IonCol size="5">
                <IonLabel><h2>{project.title}</h2></IonLabel>
              </IonCol>
              <IonCol size="4">
                <IonLabel><p>{investment.invest_amount*investment.refund_percentage/100}/{investment.invest_amount} €</p></IonLabel>
              </IonCol>
              <IonCol size="2">
                <IonLabel><p>{investment.refund_percentage}</p></IonLabel>
              </IonCol>
              <IonCol size="1">
                <IonIcon icon={chevronForwardCircleOutline} />
              </IonCol>
            </IonRow>
          </IonGrid>
       </IonItem>
    );

    case "stocks": return (
      <IonItem routerLink="/portfolio-detail" class="portfolio-item" disabled={!investment.active}>
          <IonAvatar slot="start">
            <img src={project.img} />
          </IonAvatar>
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonLabel><h3>{project.title}</h3></IonLabel>
              </IonCol>
              <IonCol size="3">
                <IonLabel><h3>{investment.buy_price + " €"}</h3></IonLabel>
              </IonCol>
              <IonCol size="3">
                <IonLabel><h3>{(project.value > 0)?"+" : ""} { project.value + "%"}</h3></IonLabel>
              </IonCol>
              <IonCol size="2">
                <IonLabel><h3>{investment.variation}%</h3></IonLabel>
              </IonCol>
              <IonCol size="1">
                <IonIcon icon={chevronForwardCircleOutline} />
              </IonCol>
            </IonRow>
          </IonGrid>
       </IonItem>
    )
  };
};

export default PortfolioEntry;
