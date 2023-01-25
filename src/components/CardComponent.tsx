import * as React from 'react';
import { Card } from '../types';

interface ICardComponentProps {
  card: Card | undefined
  onClick?: () => void
}

const CardComponent: React.FunctionComponent<ICardComponentProps> = ({ card, onClick }) => {
  return (
    <div onClick={onClick}>
      {card && <img src={card.img} key={card.id} />}
    </div>
  );
};

export default CardComponent;
