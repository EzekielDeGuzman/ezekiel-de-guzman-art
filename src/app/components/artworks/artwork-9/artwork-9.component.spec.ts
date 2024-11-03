import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork9Component } from './artwork-9.component';

describe('Artwork9Component', () => {
  let component: Artwork9Component;
  let fixture: ComponentFixture<Artwork9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
