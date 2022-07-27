import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountPageComponent } from './acount-page.component';

describe('AcountPageComponent', () => {
  let component: AcountPageComponent;
  let fixture: ComponentFixture<AcountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
