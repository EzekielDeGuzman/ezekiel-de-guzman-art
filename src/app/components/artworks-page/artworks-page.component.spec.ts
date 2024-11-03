import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksPageComponent } from './artworks-page.component';

describe('ArtworksPageComponent', () => {
  let component: ArtworksPageComponent;
  let fixture: ComponentFixture<ArtworksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtworksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
