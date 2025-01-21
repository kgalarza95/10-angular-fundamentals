import { Component } from '@angular/core';
import { Item } from '../../util/item';
import { SubmenuitemComponent } from '../submenuitem/submenuitem.component';
import { SubmenuTitleComponent } from "../submenu-title/submenu-title.component";

@Component({
  selector: 'app-submenu',
  imports: [SubmenuitemComponent, SubmenuTitleComponent],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent {

  private imgChevron: string = './assets/images/chevron.svg';

  public submenuItems1 = [
    new Item('Product Analytics', this.imgChevron, 'Navigate to Product Analytics', 'Measure & optimize products'),
    new Item('Warehouse Connectors', this.imgChevron, 'Arrow pointing right', 'Sync trusted data'),
    new Item('Session Replay', this.imgChevron, 'Arrow pointing right', 'Watch user journeys'),
    new Item('Integrations', this.imgChevron, 'Arrow pointing right', 'Connect the tools you love'),
    new Item('Security & Privacy', this.imgChevron, 'Arrow pointing right', 'Protect customer data'),
  ];

  public marketingMenuItems = [
    new Item('Acquire New Users', this.imgChevron, 'Arrow pointing right', 'Boost marketing campaigns'),
    new Item('Grow Your Users', this.imgChevron, 'Arrow pointing right', 'Engage & retain more users'),
  ];

  public sessionMenuItems = [
    new Item(
      'Session Replay',
      this.imgChevron,
      'Arrow pointing right',
      'View Session Replay details'
    ),
  ];

  public teamMenuItems = [
    new Item('Product', this.imgChevron, 'Arrow pointing right', 'View Product team details'),
    new Item('Data Analysts', this.imgChevron, 'Arrow pointing right', 'View Data Analysts team details'),
    new Item('Marketing', this.imgChevron, 'Arrow pointing right', 'View Marketing team details'),
    new Item('Engineering', this.imgChevron, 'Arrow pointing right', 'View Engineering team details'),
  ];

  public industryMenuItems = [
    new Item('Finance', this.imgChevron, 'Finance', 'Finance industry'),
    new Item('Media & Entertainment', this.imgChevron, 'Media & Entertainment', 'Media and entertainment industry'),
    new Item('B2B', this.imgChevron, 'B2B', 'B2B industry'),
    new Item('Ecommerce', this.imgChevron, 'Ecommerce', 'Ecommerce industry'),
    new Item('Healthcare', this.imgChevron, 'Healthcare', 'Healthcare industry'),
  ];

  public businessMenuItems = [
    new Item('Enterprise', this.imgChevron, 'Enterprise', 'Enterprise'),
    new Item('Startups', this.imgChevron, 'Startups', 'Startups'),
  ];

  public supportMenuItems = [
    new Item('Docs & Guides', this.imgChevron, 'Docs & Guides', 'Getting started is easy'),
    new Item('Contact Support', this.imgChevron, 'Contact Support', 'Access personalized help'),
    new Item('What\'s New', this.imgChevron, 'What\'s New', 'See the latest product updates'),
  ];


  public growthMenuItems = [
    new Item('Blog', this.imgChevron, 'Explore growth strategies', 'Explore growth strategies'),
    new Item('Events & Webinars', this.imgChevron, 'Events & Webinars', 'Join us virtually and in person'),
    new Item('Community', this.imgChevron, 'Community', 'Ask questions and learn'),
    new Item('Customer Stories', this.imgChevron, 'Customer Stories', 'Impact in action'),
  ];

  public partnerMenuItems = [
    new Item('Become a Partner', this.imgChevron, 'Become a Partner', 'Partner and grow with us'),
    new Item('Hire an Expert', this.imgChevron, 'Hire an Expert', 'Get advanced solution support'),
  ];


}
