import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork2Component } from './artwork-2.component';

describe('Artwork2Component', () => {
  let component: Artwork2Component;
  let fixture: ComponentFixture<Artwork2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
