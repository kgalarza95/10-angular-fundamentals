import { Component } from '@angular/core';
import { FooterLogoComponent } from '../footer-logo/footer-logo.component';
import { FooterColumnComponent } from "../footer-column/footer-column.component";
import { FooterBottomComponent } from "../footer-bottom/footer-bottom.component";

@Component({
  selector: 'app-footer',
  imports: [FooterLogoComponent, FooterColumnComponent, FooterBottomComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = [
    'Product Analytics',
    'Warehouse Connectors',
    'Session Replay',
    'Integrations',
    'Security & Privacy',
    'Pricing'
  ];

  footerLinks2 = [
    'Acquire New Users',
    'Grow Your Users'
  ];

  footerLinks3 = [
    'Product',
    'Data Analysts',
    'Marketing',
    'Engineering'
  ];

  footerLinks4 = [
    'Finance',
    'Media & Entertainment',
    'B2B',
    'Ecommerce',
    'Healthcare'
  ];


  footerLinks5 = [
    'Docs & Guides',
    'Contact Support',
    "What's New",
    'Blog',
    'Events & Webinars',
    'Community',
    'Customer Stories'
  ];


  footerLinks6 = [
    'About Us',
    'Become a Partner',
    'Expert Directory',
    'Careers',
    'Contact Sales'
  ];

  footerLinks7 = [
    'Company KPIs',
    'Feature Launch',
    'Lifecycle Cohort Analysis',
    'Ecommerce',
    'Marketing KPIs',
    'Web Analytics'
  ];

  footerLinks8 = [
    'Amplitude',
    'Heap',
    'Pendo',
    'Google Analytics'
  ];


}
