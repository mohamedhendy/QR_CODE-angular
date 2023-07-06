import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBusinessCardComponent } from './shared-business-card.component';

describe('SharedBusinessCardComponent', () => {
  let component: SharedBusinessCardComponent;
  let fixture: ComponentFixture<SharedBusinessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBusinessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
