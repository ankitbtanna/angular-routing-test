import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondParentChild1Component } from './second-parent-child-1.component';

describe('SecondParentChild1Component', () => {
  let component: SecondParentChild1Component;
  let fixture: ComponentFixture<SecondParentChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondParentChild1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondParentChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
