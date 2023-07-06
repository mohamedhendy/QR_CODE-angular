import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3BarcodeComponent } from './mp3-barcode.component';

describe('Mp3BarcodeComponent', () => {
  let component: Mp3BarcodeComponent;
  let fixture: ComponentFixture<Mp3BarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mp3BarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3BarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
