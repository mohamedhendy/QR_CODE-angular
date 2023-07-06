import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramBarcodeComponent } from './instagram-barcode.component';

describe('InstagramBarcodeComponent', () => {
  let component: InstagramBarcodeComponent;
  let fixture: ComponentFixture<InstagramBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
