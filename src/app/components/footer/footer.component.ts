import { Component } from '@angular/core';
import { NavLinksComponent } from '../nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  imports: [NavLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
}
