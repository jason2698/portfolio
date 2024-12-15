import { Component } from '@angular/core';
import { NavLinksComponent } from '../nav-links/nav-links.component';

@Component({
  selector: 'app-header',
  imports: [NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
