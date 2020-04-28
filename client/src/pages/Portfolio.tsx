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
          return (<IonItem href="/portfolio-detail" class="portfolio-item">
              <IonAvatar slot="start">
                <img src="./eiffel.jpg" />
              </IonAvatar>
              <IonLabel>
                <h2>{stock.name}</h2>
                <h3>{(stock.croissance > 0)?"+" : ""} {  stock.croissance + " %"}</h3>
                <p>{stock.buy_price + " €"}</p>
              </IonLabel>
           </IonItem>);
        })
      }
    </IonList>
    <IonList>
      <IonListHeader>
        Mes royalties 
      </IonListHeader>
      {
        portfolioData.royalties.map( (stock,index) => {
          return (<IonItem href="/portfolio-detail" class="portfolio-item">
              <IonAvatar slot="start">
                <img src="./eiffel.jpg" />
              </IonAvatar>
              <IonLabel>
                <h2>{stock.name}</h2>
                <p>{stock.invest_amount + " €"}</p>
              </IonLabel>
              <IonLabel>
                <h2></h2>
                <p>{stock.refund_amount + " €"} ( {stock.refund_percentage + " %"} )</p>
              </IonLabel>
           </IonItem>);
        })
      }
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Portfolio;
