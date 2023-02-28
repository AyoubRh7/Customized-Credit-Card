import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemenCardComponent } from './payemen-card.component';

describe('PayemenCardComponent', () => {
  let component: PayemenCardComponent;
  let fixture: ComponentFixture<PayemenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayemenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayemenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
