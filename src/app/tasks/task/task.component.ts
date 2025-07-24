import {Component,  inject, Input } from '@angular/core';
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

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
  // @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  onCompeleteTask(){
  this.taskService.removeTask(this.task.id);
 }
}
