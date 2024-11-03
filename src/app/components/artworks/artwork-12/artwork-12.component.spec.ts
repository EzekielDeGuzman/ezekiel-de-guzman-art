import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork12Component } from './artwork-12.component';

describe('Artwork12Component', () => {
  let component: Artwork12Component;
  let fixture: ComponentFixture<Artwork12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
