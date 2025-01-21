import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-column',
  imports: [],
  templateUrl: './footer-column.component.html',
  styleUrl: './footer-column.component.scss'
})
export class FooterColumnComponent {
  public items = input<string[]>();
}
