import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBarcodeComponent } from './design-barcode.component';

describe('DesignBarcodeComponent', () => {
  let component: DesignBarcodeComponent;
  let fixture: ComponentFixture<DesignBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
