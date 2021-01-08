import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListretailersComponent } from './listretailers.component';

describe('ListretailersComponent', () => {
  let component: ListretailersComponent;
  let fixture: ComponentFixture<ListretailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListretailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListretailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
