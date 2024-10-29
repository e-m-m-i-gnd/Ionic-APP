import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';

const GameDetails: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  // Aquí puedes obtener los detalles del juego usando `gameId`
  // Usarías un servicio o API para obtener la información del juego

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Detalles del juego con ID: {gameId}</h1>
        {/* Aquí mostrarías toda la información relevante del juego */}
      </IonContent>
    </IonPage>
  );
};

export default GameDetails;
