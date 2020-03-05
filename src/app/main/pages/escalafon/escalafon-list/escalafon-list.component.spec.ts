import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalafonListComponent } from './escalafon-list.component';

describe('EscalafonListComponent', () => {
  let component: EscalafonListComponent;
  let fixture: ComponentFixture<EscalafonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalafonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalafonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
