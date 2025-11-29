import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '2024-01-01',
      completed: false,
    },
    {
      id: '2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '2024-01-02',
      completed: false,
    },
    {
      id: '3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '2024-01-03',
      completed: false,
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: crypto.randomUUID(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      time: taskData.time,
      completed: false,
    });
    this.isAddingTask = false;
  }
}
