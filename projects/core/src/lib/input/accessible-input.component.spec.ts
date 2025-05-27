import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessibleInputComponent } from './accessible-input.component';

describe('AccessibleInputComponent', () => {
  let component: AccessibleInputComponent;
  let fixture: ComponentFixture<AccessibleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
