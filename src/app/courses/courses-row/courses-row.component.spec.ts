import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRowComponent } from './courses-row.component';

describe('CoursesRowComponent', () => {
  let component: CoursesRowComponent;
  let fixture: ComponentFixture<CoursesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
