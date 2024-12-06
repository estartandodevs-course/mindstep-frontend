import { Component, OnInit } from '@angular/core';

interface Card {
  id: number;
  image: string | null;
  flipped: boolean;
  matched: boolean;
}
@Component({
  selector: 'app-gamificacao',
  templateUrl: './jogo-da-memoria.component.html',
  styleUrl: './jogo-da-memoria.component.scss',
})
export class JogoDaMemoriaComponent {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  lockBoard: boolean = false;

  ngOnInit(): void {
    this.setupGame();
  }

  setupGame(): void {
    const images = ['assets/image1.png', 'assets/image2.png']; // Substitua pelos caminhos das imagens reais
    const deck = [...images, ...images].map((image, index) => ({
      id: index,
      image,
      flipped: false,
      matched: false,
    }));
    this.cards = this.shuffleArray(deck);
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card): void {
    if (this.lockBoard || card.flipped || card.matched) return;

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;

    if (card1.image === card2.image) {
      card1.matched = true;
      card2.matched = true;
      this.flippedCards = [];
    } else {
      this.lockBoard = true;
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
        this.flippedCards = [];
        this.lockBoard = false;
      }, 1000);
    }
  }

  onComplete(): void {
    // Aqui você pode adicionar a lógica desejada ao concluir o jogo.
    alert('Jogo concluído!');
  }
}
