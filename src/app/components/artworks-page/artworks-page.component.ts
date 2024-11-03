import { Component } from '@angular/core';
import { Artwork1Component } from '../artworks/artwork-1/artwork-1.component';
import { Artwork2Component } from '../artworks/artwork-2/artwork-2.component';
import { Artwork3Component } from '../artworks/artwork-3/artwork-3.component';
import { Artwork4Component } from '../artworks/artwork-4/artwork-4.component';
import { Artwork5Component } from '../artworks/artwork-5/artwork-5.component';
import { Artwork13Component } from '../artworks/artwork-13/artwork-13.component';
import { Artwork12Component } from '../artworks/artwork-12/artwork-12.component';
import { Artwork11Component } from '../artworks/artwork-11/artwork-11.component';
import { Artwork10Component } from '../artworks/artwork-10/artwork-10.component';
import { Artwork9Component } from '../artworks/artwork-9/artwork-9.component';
import { Artwork8Component } from '../artworks/artwork-8/artwork-8.component';
import { Artwork7Component } from '../artworks/artwork-7/artwork-7.component';
import { Artwork6Component } from '../artworks/artwork-6/artwork-6.component';

@Component({
  selector: 'app-artworks-page',
  standalone: true,
  imports: [
    Artwork1Component,
    Artwork2Component,
    Artwork3Component,
    Artwork4Component,
    Artwork5Component,
    Artwork6Component,
    Artwork7Component,
    Artwork8Component,
    Artwork9Component,
    Artwork10Component,
    Artwork11Component,
    Artwork12Component,
    Artwork13Component,
  ],
  templateUrl: './artworks-page.component.html',
  styleUrl: './artworks-page.component.css',
})
export class ArtworksPageComponent {
  selectedArtwork = 0;

  openArtworkDetails(artworkNumber: number) {
    this.selectedArtwork = artworkNumber;
  }

  closeModal() {
    this.selectedArtwork = 0;
  }
}
