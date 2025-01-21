import { Component, Renderer2 } from '@angular/core';
import { MenuItem } from '../util/menu_item';
import { SubmenuComponent } from './submenu/submenu.component';
import { Button } from '../util/Button';

@Component({
  selector: 'app-header',
  imports: [SubmenuComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private imgChevron: string = './assets/images/chevron.svg';

  public menuItems = [new MenuItem('Platform', this.imgChevron, 'Chevron for Platform'),
  new MenuItem('Solutions', this.imgChevron, 'Chevron for Solutions'),
  new MenuItem('Resources', this.imgChevron, 'Chevron for Resources'),];

  buttons: Button[] = [
    {
      label: 'Login',
      href: '#',
      type: 'text',
      ariaLabel: 'Iniciar sesión',
    },
    {
      label: 'Contact Sales',
      href: '#',
      type: 'outline',
      ariaLabel: 'Contactar ventas',
    },
    {
      label: 'Get Started Free',
      href: '#',
      type: 'solid',
      ariaLabel: 'Empezar gratis',
    },
  ];



  constructor(private renderer: Renderer2) { }


  showSubmenu(index: number): void {
    const subMenus = document.querySelectorAll<HTMLElement>('.menu__submenu');
    subMenus.forEach((submenu) => {
      const submenuIndex = parseInt(submenu.getAttribute('data-submenu') || '0', 10);
      submenu.style.display = submenuIndex === index ? 'block' : 'none';
    });
  }

  hideSubmenu(index: number): void {
    setTimeout(() => {
      const menuItems = document.querySelectorAll<HTMLElement>('.menu-item--dropdown');
      const subMenus = document.querySelectorAll<HTMLElement>('.menu__submenu');

      if (!menuItems[index]?.matches(':hover') && !subMenus.item(index)?.matches(':hover')) {
        subMenus.forEach((submenu) => {
          const submenuIndex = parseInt(submenu.getAttribute('data-submenu') || '0', 10);
          if (submenuIndex == index)
            submenu.style.display = 'none';
        });
      }
    }, 300);
  }
}
