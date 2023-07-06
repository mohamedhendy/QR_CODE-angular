import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinBarcodeComponent } from './linkedin-barcode.component';

describe('LinkedinBarcodeComponent', () => {
  let component: LinkedinBarcodeComponent;
  let fixture: ComponentFixture<LinkedinBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
