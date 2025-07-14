import {Component, EventEmitter, output, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {newTaskData} from "./new-task-model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummery='';
  enteredDate='';

  onCancel(){
  this.cancel.emit();
 }

 onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
    summary : this.enteredSummery,
      date : this.enteredDate,
    })
 }
}
//lecture 51 done
