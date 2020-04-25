import React, { useState } from 'react';
import {
  IonPicker
} from '@ionic/react';
import {
  PickerColumn,
} from "@ionic/core";

interface UtilsPicker {
  isOpen : boolean;
  onCancel: Function;
  onSave : Function;
}

const UtilsPicker: React.FC<UtilsPicker> = ({isOpen, onCancel, onSave}) => {

  const filterMode = {
    name: "filterMode",
    options: [
      { text: "<", value: "lessThan" },
      { text: ">", value: "moreThan" }
    ]
  } as PickerColumn;
  const roeValues = {
    name: "ROEvalues",
    options: [
      { text: "3", value: "3" },
      { text: "5", value: "5" },
      { text: "7", value: "7" },
      { text: "10", value: "10" },
    ]
  } as PickerColumn;

  return (
    <>
      <IonPicker
        isOpen={isOpen}
        columns={[filterMode, roeValues]}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: value => {
              onCancel()
            }
          },
          {
            text: "Ok",
            handler: value => {
              onSave(value)
            }
          }
        ]}
      />
    </>
  );
}

export default UtilsPicker;
