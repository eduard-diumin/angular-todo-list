import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '2024-01-01',
    },
    {
      id: '2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '2024-01-02',
    },
    {
      id: '3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '2024-01-03',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: crypto.randomUUID(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      time: taskData.time,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
