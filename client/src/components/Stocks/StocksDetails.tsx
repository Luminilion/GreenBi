import React from "react";

import {
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import { trendingUp, trendingDown } from 'ionicons/icons';

interface StocksDetailsProps {
  direction : string;
  value : number;
}

const StocksDetails : React.FC<StocksDetailsProps> = ({ direction, value }) => {
  return (
    <><IonItem>
      <IonIcon icon={direction === "down" ? trendingUp : trendingDown } />
      <IonLabel style={{marginLeft:10}} >{value}</IonLabel>
    </IonItem></>
  );
}

export default StocksDetails;
