import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork6Component } from './artwork-6.component';

describe('Artwork6Component', () => {
  let component: Artwork6Component;
  let fixture: ComponentFixture<Artwork6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
