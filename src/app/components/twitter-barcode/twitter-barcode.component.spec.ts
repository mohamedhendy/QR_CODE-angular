import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterBarcodeComponent } from './twitter-barcode.component';

describe('TwitterBarcodeComponent', () => {
  let component: TwitterBarcodeComponent;
  let fixture: ComponentFixture<TwitterBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
