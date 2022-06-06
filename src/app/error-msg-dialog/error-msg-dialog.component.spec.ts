import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsgDialogComponent } from './error-msg-dialog.component';

describe('ErrorMsgDialogComponent', () => {
  let component: ErrorMsgDialogComponent;
  let fixture: ComponentFixture<ErrorMsgDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMsgDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
