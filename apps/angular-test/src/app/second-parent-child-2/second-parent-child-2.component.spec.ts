import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondParentChild2Component } from './second-parent-child-2.component';

describe('SecondParentChild2Component', () => {
  let component: SecondParentChild2Component;
  let fixture: ComponentFixture<SecondParentChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondParentChild2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondParentChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
