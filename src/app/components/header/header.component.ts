import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../util/menu_item';
import { SubmenuComponent } from '../submenu/submenu.component';

@Component({
  selector: 'app-header',
  imports: [SubmenuComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private imgChevron: string = './assets/images/chevron.svg';

  public menuItems = [new MenuItem('Platform', this.imgChevron, 'Chevron for Platform'),
  new MenuItem('Solutions', this.imgChevron, 'Chevron for Solutions'),
  new MenuItem('Resources', this.imgChevron, 'Chevron for Resources'),];

  ngOnInit() {
    console.log('HeaderComponent initialized');
    const menuItems = document.querySelectorAll<HTMLElement>('.menu-item--dropdown');
    const subMenus = document.querySelectorAll<HTMLElement>('.menu__submenu');

    function showSubmenu(index: number) {
      subMenus.forEach((submenu, i) => {
        submenu.style.display = i === index ? 'block' : 'none';
      });
    }

    menuItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        showSubmenu(index);
      });

      item.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!item.matches(':hover') && !subMenus[index]?.matches(':hover')) {
            subMenus[index].style.display = 'none';
          }
        }, 300);
      });
    });

    subMenus.forEach((submenu) => {
      submenu.addEventListener('mouseleave', () => {
        setTimeout(() => {
          const menuIndex = parseInt(submenu.getAttribute('data-submenu') || '0', 10);
          if (!submenu.matches(':hover') && !menuItems[menuIndex]?.matches(':hover')) {
            submenu.style.display = 'none';
          }
        }, 300);
      });
    });
  }
}
