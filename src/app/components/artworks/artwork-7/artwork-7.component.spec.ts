import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork7Component } from './artwork-7.component';

describe('Artwork7Component', () => {
  let component: Artwork7Component;
  let fixture: ComponentFixture<Artwork7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
