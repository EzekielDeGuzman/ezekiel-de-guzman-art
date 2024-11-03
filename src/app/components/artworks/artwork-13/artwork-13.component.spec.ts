import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork13Component } from './artwork-13.component';

describe('Artwork13Component', () => {
  let component: Artwork13Component;
  let fixture: ComponentFixture<Artwork13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
