import React, {useState} from 'react';

import {
  IonButton,
  IonIcon,
  IonPopover,
} from '@ionic/react';

import { helpCircle, informationCircle, alertCircle } from "ionicons/icons";

interface PointInfoProps {
  type: string,
  content: string,
}

const PointInfo: React.FC<PointInfoProps> = ({ type, content }) => {

  let icon;
  switch (type) {
    case "info" :
      icon = informationCircle;
      break;
    case "question" :
      icon = helpCircle;
      break;
    default :
      icon = alertCircle;
  }

  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <IonButton fill="clear" onClick={() => setShowPopover(true)} >
        <IonIcon icon={icon} size="small" slot="icon-only"/>
      </IonButton>

      <IonPopover
        isOpen={showPopover}
        onDidDismiss={() => setShowPopover(false)}>
        <p style={{padding:10}}>
          {content}
        </p>
        <br />
        <IonButton onClick={()=>setShowPopover(false)} expand='block'>Ok</IonButton>
      </IonPopover>
    </>
  );
}

export default PointInfo;
