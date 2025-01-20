import { Component, input } from '@angular/core';
import { Item } from '../util/item';

@Component({
  selector: 'app-submenuitem',
  imports: [],
  templateUrl: './submenuitem.component.html',
  styleUrl: './submenuitem.component.scss'
})
export class SubmenuitemComponent {
  public subItem = input<Item[]>();
}
