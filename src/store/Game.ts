import { action, makeObservable, observable } from "mobx"
import { Card, TypeCard } from "../types"
import { cards as allCards } from '../cards'

class Game {
  trumpCard: TypeCard = TypeCard.bubi
  isMyStep: boolean = false
  isGetCard: boolean = false
  deckCards: Array<Card> = []
  isMyAttack: boolean = false
  attackCard: Card = allCards[0]

  constructor() {
    makeObservable(this, {
      isMyStep: observable,
      deckCards: observable,
      isMyAttack: observable,
      attackCard: observable,
      isGetCard: observable,
      toggleStep: action,
      toggleAtack: action,
      reduceCards: action,
      mixDeck: action,
      startGame: action
    })
  }

  toggleStep() {
    this.isMyStep = !this.isMyStep
  }

  toggleAtack() {
    this.isMyAttack = !this.isMyAttack
  }

  setIsGetCard(isGetCard: boolean) {
    this.isGetCard = isGetCard
  }

  setAttackCard(card: Card) {
    this.attackCard = card
  }

  defineStep(myCards: Card[], hisCards: Card[]) {
    const myJuniorTrumpRank = this.defineJuniorTrumpCard(myCards)
    const hisJuniorTrumpRank = this.defineJuniorTrumpCard(hisCards)
    if (myJuniorTrumpRank) {
      if ((myJuniorTrumpRank < hisJuniorTrumpRank) || !hisJuniorTrumpRank) {
        this.toggleStep()
        this.toggleAtack()
      }
    }
  }

  defineJuniorTrumpCard(cards: Card[]) {
    const trumpRanks = cards.filter(card => card.type === this.trumpCard)
      .map(card => card.rank)

    if (trumpRanks.length) {
      return Math.min(...trumpRanks)
    }

    return 0
  }

  reduceCards(countCards: number): Array<Card> {
    const removedCard = this.deckCards.splice(0, countCards)
    return removedCard
  }

  mixDeck() {
    this.deckCards = this.deckCards.sort(() => Math.random() - 0.5);
    this.trumpCard = this.deckCards[this.deckCards.length - 1].type
  }

  addPlayersCards(my: any, his: any) {
    const myNeed = 6 - my.cards.length
    const hisNeed = 6 - his.cards.length
    my.addCards(this.reduceCards(myNeed > 0 ? myNeed : 0))
    his.addCards(this.reduceCards(hisNeed > 0 ? hisNeed : 0))
  }

  startGame() {
    this.deckCards = allCards
    this.mixDeck()

    const firstHisCards = this.reduceCards(6)

    const firstMyCards = this.reduceCards(6)
    this.defineStep(firstMyCards, firstHisCards)
    return { firstHisCards, firstMyCards }
  }

}

export default Game