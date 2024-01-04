import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBgRightComponent } from './animated-bg-right.component';

describe('AnimatedBgRightComponent', () => {
  let component: AnimatedBgRightComponent;
  let fixture: ComponentFixture<AnimatedBgRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedBgRightComponent]
    });
    fixture = TestBed.createComponent(AnimatedBgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
