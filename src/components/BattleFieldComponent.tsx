import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { CoupleCard } from '../types';
import CardComponent from './CardComponent';

interface IBattleFieldComponentProps {
  cards: CoupleCard
}

const BattleFieldComponent: React.FC<IBattleFieldComponentProps> = observer(({ cards }) => {
  return (
    <div>
      <div className='battleField'>
        {cards.his.map((card) => <CardComponent card={card} key={card.id} />)}
      </div>
      <div className='battleField'>
        {cards.my.map((card) => <CardComponent card={card} key={card.id} />)}
      </div>
    </div>
  );
});

export default BattleFieldComponent;
