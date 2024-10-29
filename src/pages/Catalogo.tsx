import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GameCard from '../components/GameCard';
import gamesService from '../services/gamesService';  // Servicio para obtener la lista de juegos

const Catalog: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    // Obtiene los juegos desde el servicio (puede ser de una API o datos locales)
    gamesService.getGames().then(setGames);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game Catalog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Catalog;
