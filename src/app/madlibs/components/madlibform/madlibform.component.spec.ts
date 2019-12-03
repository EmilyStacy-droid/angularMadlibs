import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlibformComponent } from './madlibform.component';

describe('MadlibformComponent', () => {
  let component: MadlibformComponent;
  let fixture: ComponentFixture<MadlibformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlibformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlibformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
