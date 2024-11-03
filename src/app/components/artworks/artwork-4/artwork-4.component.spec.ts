import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork4Component } from './artwork-4.component';

describe('Artwork4Component', () => {
  let component: Artwork4Component;
  let fixture: ComponentFixture<Artwork4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
