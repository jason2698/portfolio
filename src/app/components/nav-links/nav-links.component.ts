import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  protected  navItems: string[] = ['About', 'Skill Set', 'Experience', 'Contacts'];

  scrollTo(section: string) {
    let elementId = section.toLowerCase().replace(' ', '-');
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
