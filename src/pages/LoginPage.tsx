import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import InputField from '../components/InputField';
import { useHistory } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
      console.log('Login successful!');
      setError('');
      history.push('/home'); // Redirigir a la página de inicio
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <InputField label="Email" type="email" value={email} setValue={setEmail} />
        <InputField label="Password" type="password" value={password} setValue={setPassword} />
        {error && <IonText color="danger">{error}</IonText>}
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
