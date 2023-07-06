import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookBarcodeComponent } from './facebook-barcode.component';

describe('FacebookBarcodeComponent', () => {
  let component: FacebookBarcodeComponent;
  let fixture: ComponentFixture<FacebookBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
