import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XContainerComponent } from './x-container.component';

describe('XContainerComponent', () => {
  let component: XContainerComponent;
  let fixture: ComponentFixture<XContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
