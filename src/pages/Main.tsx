import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import BattleFieldComponent from '../components/BattleFieldComponent';
import DeckComponent from '../components/DeckComponent';
import GameOver from '../components/GameOver';
import HisCardsComponents from '../components/HisCardsComponent';
import MyActions from '../components/MyActions';
import MyCardsComponents from '../components/MyCardsComponent';
import { battleField, hisCards, myCards, game } from '../store'
import { Card } from '../types';

const Main: React.FC = observer(() => {
  const startGame = () => {
    const { firstHisCards, firstMyCards } = game.startGame()
    hisCards.addCards(firstHisCards)
    myCards.addCards(firstMyCards)
  }

  const hisAction = () => {
    if (!game.isMyStep) {
      const battleFieldCards = [...battleField.cards.his, ...battleField.cards.my]

      const hisJuniorCard = hisCards.defineCardForAction(battleFieldCards)

      if (hisJuniorCard) {
        battleField.addHisCard(hisJuniorCard)
      } else {
        battleField.clearBattleField(myCards, hisCards)
      }
    }
  }

  useEffect(startGame, [])

  useEffect(hisAction, [game.isMyStep])

  const clickMyCard = (card: Card) => {
    if (game.isMyStep) {
      const myStepCard = myCards.checkMyStep(card, [...battleField.cards.my, ...battleField.cards.his])
      if (myStepCard) {
        battleField.addMyCard(myStepCard)
      }
    }
  }

  const getCard = () => {
    myCards.addCards([...battleField.cards.my, ...battleField.cards.his])
    game.toggleStep()
    game.setIsGetCard(true)
    battleField.clearBattleField(myCards, hisCards)
  }

  return (
    <>
      <HisCardsComponents cards={hisCards.cards} />
      <BattleFieldComponent cards={battleField.cards} />
      <MyCardsComponents cards={myCards.cards} onAtack={clickMyCard} />
      <DeckComponent trump={game.trumpCard} cardBalance={game.deckCards.length} />
      <MyActions
        isMyAttack={game.isMyAttack}
        onRepulsed={() => battleField.clearBattleField(myCards, hisCards)}
        onGetCard={getCard}
      />
      <GameOver
        isShow={!game.deckCards.length && (!myCards.cards.length || !hisCards.cards.length)}
        isMyWin={!myCards.cards.length}
        onRestartGame={startGame}
      />
    </>
  );
});

export default Main;
