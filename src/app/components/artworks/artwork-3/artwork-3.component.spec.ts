import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork3Component } from './artwork-3.component';

describe('Artwork3Component', () => {
  let component: Artwork3Component;
  let fixture: ComponentFixture<Artwork3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
