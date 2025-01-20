import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  isValidated: boolean = true;
  public onClick = output<string>();


  sendMessage() {
    this.onClick.emit('Download demo');
  }
}
