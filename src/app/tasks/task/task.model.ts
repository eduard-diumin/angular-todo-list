export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  time: string;
  completed: boolean;
}

export interface NewTaskData {
  title: string;
  summary: string;
  time: string;
}
