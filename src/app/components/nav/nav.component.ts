import { Component } from '@angular/core';
import { ArtworksPageComponent } from '../artworks-page/artworks-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { CvComponent } from '../cv/cv.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ArtworksPageComponent,
    AboutPageComponent,
    CvComponent,
    ContactPageComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  currentPage: string = 'CV';
  changeTab(tab: string) {
    this.currentPage = tab;
  }
}
