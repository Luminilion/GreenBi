import React from "react";

import {
  IonProgressBar,
} from '@ionic/react';

import {} from 'ionicons/icons';

interface RoyaltiesDetailsProps {
  progress : number;
  fund : number;
}

const RoyaltiesDetails : React.FC<RoyaltiesDetailsProps> = ({ progress, fund }) => {
  return (
    <><IonProgressBar value={progress} color="primary" /> <br />
    <IonProgressBar value={fund} color="secondary" /> <br /></>
  );
}

export default RoyaltiesDetails;
