/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HakkindaComponent } from './hakkinda.component';

describe('HakkindaComponent', () => {
  let component: HakkindaComponent;
  let fixture: ComponentFixture<HakkindaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HakkindaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HakkindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
