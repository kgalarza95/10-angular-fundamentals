import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.playVideos();
  }

  playVideos(): void {
    const videos = document.querySelectorAll('video');
    videos.forEach((video: HTMLVideoElement) => {
      video.play();
    });
  }
}
