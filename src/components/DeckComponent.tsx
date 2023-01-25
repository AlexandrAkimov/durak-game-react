import * as React from 'react';
import { TypeCard } from '../types';

interface IDeckComponentProps {
  trump: TypeCard,
  cardBalance: number
}

const DeckComponent: React.FC<IDeckComponentProps> = ({ trump, cardBalance }) => {

  const trumps = {
    'chervi': { color: 'red', code: { __html: '&#9829;', }, },
    'bubi': { color: 'red', code: { __html: '&#9830;' }, },
    'kresti': { color: 'black', code: { __html: '&#9827;' }, },
    'piki': { color: 'black', code: { __html: '&#9824;' }, },
  }


  return (
    <div className='deckInfo'>
      <div className={trumps[trump].color} dangerouslySetInnerHTML={trumps[trump].code} />
      <div>{'Остаток в колоде: ' + cardBalance}</div>
    </div>

  );
};

export default DeckComponent;
