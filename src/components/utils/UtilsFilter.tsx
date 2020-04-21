import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';

interface UtilsFilterProps {

}

const UtilsFilter: React.FC<UtilsFilterProps> = () => {

  const [showModal, setShowModal] = useState(false);

  return (

    <>
      <IonModal isOpen={showModal}>

        <p style={{ margin:20 }}>
          This is a test filter. To be populated.
        </p>

        <IonSegment value="one">
          <IonSegmentButton value="one">
            Test
          </IonSegmentButton>

          <IonSegmentButton value="two">
            2
          </IonSegmentButton>
        </IonSegment>



        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>

      </IonModal>

      <IonButton
        expand="block"
        fill="outline"
        shape="round"
        onClick={() => setShowModal(true)}>
        Filter
      </IonButton>
    </>
  );
};

export default UtilsFilter;
