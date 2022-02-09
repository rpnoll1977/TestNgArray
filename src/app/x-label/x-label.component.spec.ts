import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XLabelComponent } from './x-label.component';

describe('XLabelComponent', () => {
  let component: XLabelComponent;
  let fixture: ComponentFixture<XLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
