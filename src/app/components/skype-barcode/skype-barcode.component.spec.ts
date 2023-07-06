import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkypeBarcodeComponent } from './skype-barcode.component';

describe('SkypeBarcodeComponent', () => {
  let component: SkypeBarcodeComponent;
  let fixture: ComponentFixture<SkypeBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkypeBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkypeBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
