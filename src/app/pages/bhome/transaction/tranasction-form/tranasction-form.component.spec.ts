import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranasctionFormComponent } from './tranasction-form.component';

describe('TranasctionFormComponent', () => {
  let component: TranasctionFormComponent;
  let fixture: ComponentFixture<TranasctionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranasctionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranasctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
