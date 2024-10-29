import React from 'react';
import { IonCard, IonCardContent, IonImg, IonCardHeader, IonCardTitle } from '@ionic/react';

interface GameCardProps {
  game: {
    id: number;
    title: string;
    platform: string;
    imageUrl: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <IonCard>
      <IonImg src={game.imageUrl} alt={game.title} />
      <IonCardHeader>
        <IonCardTitle>{game.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Platform: {game.platform}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default GameCard;
