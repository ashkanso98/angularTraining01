import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";

interface Task {
  id: string;
  userId: string;
  summary: string;
  title: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompeleteTask(){
  this.complete.emit(this.task.id);
 }
}
