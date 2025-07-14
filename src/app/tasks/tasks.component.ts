import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import {newTaskData} from "./new-task/new-task-model";
import  {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {

  }

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.id)
  }

  onCompeleteTask(id:string){
    this.tasksService.removeTask(id)
  }
  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCancelTask(){
    this.isAddingTask=false;
  }

  onAddTask(taskData:newTaskData){

    this.isAddingTask=false;
  }
}
