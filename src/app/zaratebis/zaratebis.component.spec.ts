import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaratebisComponent } from './zaratebis.component';

describe('ZaratebisComponent', () => {
  let component: ZaratebisComponent;
  let fixture: ComponentFixture<ZaratebisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaratebisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaratebisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
