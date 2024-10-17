import React, { useState } from 'react';
import { Task } from '../types';
import TalanColumn from './TalanColumn';
import { Plus } from 'lucide-react';

interface TalanBoardProps {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => void;
  updateTaskPriority: (taskId: string, newPriority: number) => void;
  updateTaskAssignee: (taskId: string, newAssignee: string) => void;
}

const TalanBoard: React.FC<TalanBoardProps> = ({ tasks, addTask, updateTaskStatus, updateTaskPriority, updateTaskAssignee }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle.trim());
      setNewTaskTitle('');
    }
  };

  const columns: Task['status'][] = ['general-backlog', 'month-tasks', 'doing', 'done'];

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
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {columns.map(column => (
          <TalanColumn
            key={column}
            title={column.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            tasks={tasks.filter(task => task.status === column).sort((a, b) => b.priority - a.priority)}
            updateTaskStatus={updateTaskStatus}
            updateTaskPriority={updateTaskPriority}
            updateTaskAssignee={updateTaskAssignee}
          />
        ))}
      </div>
    </div>
  );
};

export default TalanBoard;