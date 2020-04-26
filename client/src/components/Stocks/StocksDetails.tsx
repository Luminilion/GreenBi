import React from "react";

import {
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import { chevronUp, chevronDown } from 'ionicons/icons';

interface StocksDetailsProps {
  direction : string;
  value : number;
}

const StocksDetails : React.FC<StocksDetailsProps> = ({ direction, value }) => {
  return (
    <><IonItem>
      <IonIcon icon={direction == "down" ? chevronUp : chevronDown} />
      <IonLabel>{value}</IonLabel>
    </IonItem></>
  );
}

export default StocksDetails;
