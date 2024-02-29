import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllproductsComponent } from './get-allproducts.component';

describe('GetAllproductsComponent', () => {
  let component: GetAllproductsComponent;
  let fixture: ComponentFixture<GetAllproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllproductsComponent]
    });
    fixture = TestBed.createComponent(GetAllproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
