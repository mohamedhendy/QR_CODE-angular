import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRTypeButtonsComponent } from './qrtype-buttons.component';

describe('QRTypeButtonsComponent', () => {
  let component: QRTypeButtonsComponent;
  let fixture: ComponentFixture<QRTypeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRTypeButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRTypeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
