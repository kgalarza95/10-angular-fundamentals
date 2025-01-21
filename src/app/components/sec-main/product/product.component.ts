import { Component, OnInit } from '@angular/core';
import { DemoComponent } from "./demo/demo.component";
import { Section } from '../../util/section';
import { CardsComponent } from "./cards/cards.component";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-product',
  imports: [DemoComponent, CardsComponent, CarouselComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  listSections: Section[] = [
    new Section(
      'Self-Serve Data',
      'Get answers, fast',
      'Decisions are efficient when intuitive dashboards empower everyone ',
      'everyone ',
      'to access data, instantly—no SQL or analytics background required.',
      'Get a Demo',
      './assets/video/dashboard-demo-opt-4k.mp4',
      false
    ),
    new Section(
      'Session Replay',
      'Unify your qualitative & quantitative data',
      'With Session Replay, connect all your trusted business data with your product data to understand the real impact on your marketing efforts, support, NPS, billing, and more.',
      '',
      '',
      'Learn More',
      './assets/video/session_video.mp4',
      false
    ),
    new Section(
      'Integrated Data',
      'All your data, in one place',
      'Break down silos by unifying all your key metrics across every team ',
      'every team',
      'into one, self-serve, platform.',
      'View Integration',
      '',
      false
    )
  ];


  listSections2: Section[] = [
    new Section(
      'Unified Data',
      'Measure your impact',
      'Connect',
      'all your trusted business data',
      'with your product data to understand the real impact on your marketing efforts.',
      'Explore Product',
      './assets/video/movi_product.mp4',
      true
    ),
    new Section(
      'Stop guessing.',
      'Start measuring.',
      'Join over ',
      '20,000+ companies ',
      'who accelerated their growth with Mixpanel.',
      'See Customer Stories',
      '',
      false
    )
  ];

  lisIsSolid: boolean[] = [true, false];

  constructor() { }

  ngOnInit(): void {
    document.body.addEventListener('click', this.playVideos);
    this.playVideos();
  }

  playVideos(): void {
    const videos = document.querySelectorAll('video');
    videos.forEach((video: HTMLVideoElement) => {
      video.play();
    });
  }
}
