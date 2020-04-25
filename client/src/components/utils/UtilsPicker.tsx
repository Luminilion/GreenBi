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
  leftColumn: PickerColumn;
  rightColumn: PickerColumn;
}

const UtilsPicker: React.FC<UtilsPicker> = ({isOpen, onCancel, onSave, leftColumn, rightColumn}) => {

  return (
    <>
      <IonPicker
        isOpen={isOpen}
        columns={[leftColumn, rightColumn]}
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
