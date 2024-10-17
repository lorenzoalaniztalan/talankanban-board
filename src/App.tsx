import React, { useState } from 'react';
import TalanBoard from './components/TalanBoard';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Task 1', status: 'general-backlog', priority: 2, assignee: 'John' },
    { id: '2', title: 'Task 2', status: 'month-tasks', priority: 1, assignee: 'Jane' },
    { id: '3', title: 'Task 3', status: 'done', priority: 3, assignee: 'Alice' },
  ]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: 'general-backlog',
      priority: 1,
      assignee: '',
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const updateTaskPriority = (taskId: string, newPriority: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, priority: newPriority } : task
    ));
  };

  const updateTaskAssignee = (taskId: string, newAssignee: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, assignee: newAssignee } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-gradient">Talan Board</h1>
      <TalanBoard
        tasks={tasks}
        addTask={addTask}
        updateTaskStatus={updateTaskStatus}
        updateTaskPriority={updateTaskPriority}
        updateTaskAssignee={updateTaskAssignee}
      />
    </div>
  );
};

export default App;