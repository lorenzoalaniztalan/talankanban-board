export interface Task {
  id: string;
  title: string;
  status: 'general-backlog' | 'month-tasks' | 'doing' | 'done';
  priority: number;
  assignee: string;
}