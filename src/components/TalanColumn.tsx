import React from 'react';
import { Task } from '../types';
import { CheckCircle, Circle, ChevronUp, ChevronDown, User } from 'lucide-react';

interface TalanColumnProps {
  title: string;
  tasks: Task[];
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => void;
  updateTaskPriority: (taskId: string, newPriority: number) => void;
  updateTaskAssignee: (taskId: string, newAssignee: string) => void;
}

const TalanColumn: React.FC<TalanColumnProps> = ({ title, tasks, updateTaskStatus, updateTaskPriority, updateTaskAssignee }) => {
  const columns: Task['status'][] = ['general-backlog', 'month-tasks', 'doing', 'done'];

  return (
    <div className="bg-gray-200 p-4 rounded-lg flex-1 min-w-[250px]">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="bg-white p-3 rounded shadow-sm mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className={task.status === 'done' ? 'line-through text-gray-500' : ''}>{task.title}</span>
              <select
                value={task.status}
                onChange={(e) => updateTaskStatus(task.id, e.target.value as Task['status'])}
                className="text-sm border rounded p-1"
              >
                {columns.map(column => (
                  <option key={column} value={column}>
                    {column.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => updateTaskPriority(task.id, task.priority + 1)}
                  className="text-gray-500 hover:text-blue-500 mr-1"
                >
                  <ChevronUp size={16} />
                </button>
                <button
                  onClick={() => updateTaskPriority(task.id, Math.max(1, task.priority - 1))}
                  className="text-gray-500 hover:text-blue-500 mr-1"
                >
                  <ChevronDown size={16} />
                </button>
                <span className="text-sm text-gray-500">Priority: {task.priority}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="text-gray-500 mr-1" />
                <input
                  type="text"
                  value={task.assignee}
                  onChange={(e) => updateTaskAssignee(task.id, e.target.value)}
                  placeholder="Assign to"
                  className="text-sm border rounded p-1 w-24"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalanColumn;