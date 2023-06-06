import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMapComponent } from './array-map.component';

describe('ArrayMapComponent', () => {
  let component: ArrayMapComponent;
  let fixture: ComponentFixture<ArrayMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayMapComponent]
    });
    fixture = TestBed.createComponent(ArrayMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
