import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersWaitingListComponent } from './customers-waiting-list.component';

describe('CustomersWaitingListComponent', () => {
  let component: CustomersWaitingListComponent;
  let fixture: ComponentFixture<CustomersWaitingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersWaitingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
