import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertoPageComponent } from './roberto-page.component';

describe('RobertoPageComponent', () => {
  let component: RobertoPageComponent;
  let fixture: ComponentFixture<RobertoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobertoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobertoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
