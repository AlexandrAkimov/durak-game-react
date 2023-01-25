export enum TypeCard {
  chervi = 'chervi',
  bubi = 'bubi',
  piki = 'piki',
  kresti = 'kresti'
}

export interface Card {
  id: number
  rank: number
  type: TypeCard,
  img: string
}

export interface CoupleCard {
  my: Card[],
  his: Card[]
}
