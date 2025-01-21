import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submenu-title',
  imports: [],
  templateUrl: './submenu-title.component.html',
  styleUrl: './submenu-title.component.scss'
})
export class SubmenuTitleComponent {
  @Input() title!: string;
  @Input() icon?: string;
}
