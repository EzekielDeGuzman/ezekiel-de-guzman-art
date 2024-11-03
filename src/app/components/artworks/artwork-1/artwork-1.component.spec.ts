import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork1Component } from './artwork-1.component';

describe('Artwork1Component', () => {
  let component: Artwork1Component;
  let fixture: ComponentFixture<Artwork1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
