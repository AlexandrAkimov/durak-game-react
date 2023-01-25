import { makeObservable } from "mobx"
import { Card } from "../types"
import Game from "./Game"

class PlayerCards {
  cards: Array<Card> = []


  reduceCard(id: number): void {
    this.cards = this.cards.filter(card => card.id !== id)
  }

  addCards(cards: Array<Card>): void {
    this.cards = [...this.cards, ...cards]
  }
}

export default PlayerCards