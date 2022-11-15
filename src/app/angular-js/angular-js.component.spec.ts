import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsComponent } from './angular-js.component';

describe('AngularJsComponent', () => {
  let component: AngularJsComponent;
  let fixture: ComponentFixture<AngularJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
