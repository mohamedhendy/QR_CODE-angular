import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeBarcodeComponent } from './youtube-barcode.component';

describe('YoutubeBarcodeComponent', () => {
  let component: YoutubeBarcodeComponent;
  let fixture: ComponentFixture<YoutubeBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
