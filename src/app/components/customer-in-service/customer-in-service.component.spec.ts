import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInServiceComponent } from './customer-in-service.component';

describe('CustomerInServiceComponent', () => {
  let component: CustomerInServiceComponent;
  let fixture: ComponentFixture<CustomerInServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
