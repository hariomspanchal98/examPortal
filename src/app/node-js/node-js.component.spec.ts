import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJsComponent } from './node-js.component';

describe('NodeJsComponent', () => {
  let component: NodeJsComponent;
  let fixture: ComponentFixture<NodeJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
