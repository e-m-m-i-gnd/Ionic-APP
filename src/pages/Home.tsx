import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
  // Este es un array ficticio de juegos destacados
  const featuredGames = [
    { id: 1, title: 'The Witcher 3', platform: 'PC', imageUrl: '/assets/images/witcher3.jpg' },
    { id: 2, title: 'Cyberpunk 2077', platform: 'PC', imageUrl: '/assets/images/cyberpunk.jpg' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game Catalog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Featured Games</h2>
        <div className="game-grid">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
