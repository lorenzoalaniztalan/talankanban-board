import React, { useState } from 'react';
import { Task } from '../types';
import KanbanColumn from './KanbanColumn';
import { Plus } from 'lucide-react';

interface KanbanBoardProps {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTaskStatus: (taskId: string, newStatus: 'todo' | 'done') => void;
  updateTaskPriority: (taskId: string, newPriority: number) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, addTask, updateTaskStatus, updateTaskPriority }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle.trim());
      setNewTaskTitle('');
    }
  };

  const todoTasks = tasks.filter(task => task.status === 'todo').sort((a, b) => b.priority - a.priority);
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div>
      <form onSubmit={handleAddTask} className="mb-6 flex">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter new task"
          className="flex-grow p-2 border rounded-l"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r flex items-center">
          <Plus size={20} className="mr-1" /> Add Task
        </button>
      </form>
      <div className="flex space-x-4">
        <KanbanColumn
          title="To Do"
          tasks={todoTasks}
          updateTaskStatus={updateTaskStatus}
          updateTaskPriority={updateTaskPriority}
        />
        <KanbanColumn
          title="Done"
          tasks={doneTasks}
          updateTaskStatus={updateTaskStatus}
          updateTaskPriority={updateTaskPriority}
        />
      </div>
    </div>
  );
};

export default KanbanBoard;