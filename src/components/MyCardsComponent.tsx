import * as React from 'react';
import { Card } from '../types';
import CardComponent from './CardComponent';

interface IMyCardsComponentsProps {
  cards: Card[]
  onAtack: (card: Card) => void
}

const MyCardsComponents: React.FC<IMyCardsComponentsProps> = ({ cards, onAtack }) => {
  return (
    <div className='playerCards'>
      {cards.map(card => <CardComponent key={card.id} card={card} onClick={() => onAtack(card)} />)}
    </div>
  );
};

export default MyCardsComponents;
