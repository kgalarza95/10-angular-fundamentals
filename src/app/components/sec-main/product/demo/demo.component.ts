import { Component, input } from '@angular/core';
import { Section } from '../../../util/section';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

  sectionItems = input<Section[]>();
  listIsSolid = input<boolean[]>();

}
