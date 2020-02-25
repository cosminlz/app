import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChroresComponent } from './chrores.component';

describe('ChroresComponent', () => {
  let component: ChroresComponent;
  let fixture: ComponentFixture<ChroresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChroresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
