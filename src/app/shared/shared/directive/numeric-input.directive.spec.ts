
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NumberOnlyDirective } from './numeric-input.directive';

@Component({
  template: `<input type="text" appNumberInput>`
})
class TestComponent {}

describe('NumberOnlyDirective', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, NumberOnlyDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create an instance', () => {
    const directive = new NumberOnlyDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should restrict input to only numbers with one decimal point', () => {
    inputElement.value = '12.3';
    inputElement.dispatchEvent(new Event('input'));
    expect(inputElement.value).toBe('12.3');

  });
});
