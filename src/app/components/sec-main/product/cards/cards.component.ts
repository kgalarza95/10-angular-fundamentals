import { Component } from '@angular/core';
import { Card } from '../../../util/Card ';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  cards: Card[] = [
    new Card(
      [
        './assets/images/icon-cards/icon.svg',
        './assets/images/icon-cards/icon2.svg',
        './assets/images/icon-cards/icon3.svg'
      ],
      'Data warehouse',
      'Get trusted data from your warehouse with our native connectors and democratize analysis on your source of truth for all teams.',
      '#'
    ),
    new Card(
      [
        './assets/images/icon-cards/icon4.svg',
        './assets/images/icon-cards/icon5.svg',
        './assets/images/icon-cards/icon6.svg'
      ],
      'SDK',
      'You can stream data directly from any digital product using a Mixpanel SDK. Our developer documentation will guide you in choosing the best option for your infrastructure.',
      '#'
    ),
    new Card(
      [
        './assets/images/icon-cards/icon7.svg',
        './assets/images/icon-cards/icon8.svg',
        './assets/images/icon-cards/icon9.svg'
      ],
      'CDP',
      'With tools like Segment, you can send data by flipping a switch. We partner with a growing number of CDPs to seamlessly integrate analytics into any tech stack.',
      '#'
    )
  ];

}
