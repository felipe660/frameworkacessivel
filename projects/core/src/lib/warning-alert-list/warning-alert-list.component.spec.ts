import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlertListComponent } from './warning-alert-list.component';

describe('WarningAlertListComponent', () => {
  let component: WarningAlertListComponent;
  let fixture: ComponentFixture<WarningAlertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningAlertListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningAlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
