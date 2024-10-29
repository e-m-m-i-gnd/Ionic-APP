import React from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import { TextFieldTypes } from '@ionic/core';  // Importa TextFieldTypes

interface InputFieldProps {
  label: string;
  type: TextFieldTypes;  // Ajusta el tipo de 'type' para usar TextFieldTypes
  value: string;
  setValue: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, setValue }) => {
  return (
    <IonItem>
      <IonLabel position="floating">{label}</IonLabel>
      <IonInput
        type={type}
        value={value}
        onIonChange={(e) => setValue(e.detail.value!)}
        required
      />
    </IonItem>
  );
};

export default InputField;
