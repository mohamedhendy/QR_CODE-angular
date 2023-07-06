import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkQrCodeComponent } from './bulk-qr-code.component';

describe('BulkQrCodeComponent', () => {
  let component: BulkQrCodeComponent;
  let fixture: ComponentFixture<BulkQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
