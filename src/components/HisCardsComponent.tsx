import * as React from 'react';
import { Card } from '../types';
import CardComponent from './CardComponent';

interface IHisCardsComponentsProps {
  cards: Card[]
}

const HisCardsComponents: React.FC<IHisCardsComponentsProps> = ({ cards }) => {
  return (
    <div className='playerCards'>
      {cards.map(card => <CardComponent key={card.id} card={card} />)}
    </div>
  );
};

export default HisCardsComponents;
