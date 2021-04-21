import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenatoComponent } from './renato.component';

describe('RenatoComponent', () => {
  let component: RenatoComponent;
  let fixture: ComponentFixture<RenatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
