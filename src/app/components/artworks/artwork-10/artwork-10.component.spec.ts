import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork10Component } from './artwork-10.component';

describe('Artwork10Component', () => {
  let component: Artwork10Component;
  let fixture: ComponentFixture<Artwork10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
