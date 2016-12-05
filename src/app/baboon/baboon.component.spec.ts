/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaboonComponent } from './baboon.component';

describe('BaboonComponent', () => {
  let component: BaboonComponent;
  let fixture: ComponentFixture<BaboonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaboonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaboonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
