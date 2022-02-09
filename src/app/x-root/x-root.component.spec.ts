import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XRootComponent } from './x-root.component';

describe('XRootComponent', () => {
  let component: XRootComponent;
  let fixture: ComponentFixture<XRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
