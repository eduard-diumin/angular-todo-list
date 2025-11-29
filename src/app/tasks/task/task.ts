import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../task.services';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
