import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzequielComponent } from './ezequiel.component';

describe('EzequielComponent', () => {
  let component: EzequielComponent;
  let fixture: ComponentFixture<EzequielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzequielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzequielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
