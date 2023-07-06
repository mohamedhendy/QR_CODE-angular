import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlBarcodeComponent } from './url-barcode.component';

describe('UrlBarcodeComponent', () => {
  let component: UrlBarcodeComponent;
  let fixture: ComponentFixture<UrlBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
