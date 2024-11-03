import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artwork11Component } from './artwork-11.component';

describe('Artwork11Component', () => {
  let component: Artwork11Component;
  let fixture: ComponentFixture<Artwork11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artwork11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artwork11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
