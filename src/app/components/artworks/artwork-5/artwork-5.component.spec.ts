import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork5Component } from './artwork-5.component';

describe('Artwork5Component', () => {
  let component: Artwork5Component;
  let fixture: ComponentFixture<Artwork5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
