import { Component, input } from '@angular/core';
import { Card } from '../../../../util/Card ';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cardsItems = input<Card[]>();
}
