import { Component } from '@angular/core';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NavLinksComponent,NgbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isCollapsed : boolean = true;
}
