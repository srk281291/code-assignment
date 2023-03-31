import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit modalclose event when modalcloseEmit method is called', () => {
    spyOn(component.modalclose, 'emit');
    component.modalcloseEmit();
    expect(component.modalclose.emit).toHaveBeenCalled();
  });

  it('should emit modalsubmit event when modalSubmitEmit method is called', () => {
    spyOn(component.modalsubmit, 'emit');
    component.modalSubmitEmit();
    expect(component.modalsubmit.emit).toHaveBeenCalled();
  });
});
