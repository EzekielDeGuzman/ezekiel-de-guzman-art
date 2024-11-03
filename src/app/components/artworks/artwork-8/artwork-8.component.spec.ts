import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork8Component } from './artwork-8.component';

describe('Artwork8Component', () => {
  let component: Artwork8Component;
  let fixture: ComponentFixture<Artwork8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
