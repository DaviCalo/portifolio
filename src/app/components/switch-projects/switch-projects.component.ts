import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-projects',
  standalone: true,
  imports: [],
  templateUrl: './switch-projects.component.html',
  styleUrl: './switch-projects.component.scss'
})
export class SwitchProjectsComponent {
  @Output() inputValueChange = new EventEmitter<string>();
  inputValue: string = '';

  onRadioChange(event: any): void {
    if(event.target.value === this.inputValue) {
      this.inputValueChange.emit("ALL");
      event.target.checked = !event.target.checked;
      this.inputValue = '';
    } else {
      this.inputValue = event.target.value;
      this.inputValueChange.emit(event.target.value);
    }
  }
}
