import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Output() modalclose = new EventEmitter();
  @Output() modalsubmit = new EventEmitter();
  @Input() recipientName = "";
  @Input() amountValue = "";
  @Input() modalDesc = "";
  @Input() modalTitle = "Review";

  modalcloseEmit() {
    this.modalclose.emit();
  }
  modalSubmitEmit() {
    this.modalsubmit.emit();
  }
}
