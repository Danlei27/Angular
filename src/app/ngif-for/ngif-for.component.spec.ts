import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifForComponent } from './ngif-for.component';

describe('NgifForComponent', () => {
  let component: NgifForComponent;
  let fixture: ComponentFixture<NgifForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
