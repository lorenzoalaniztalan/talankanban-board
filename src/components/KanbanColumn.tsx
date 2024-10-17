import React from 'react';
import { Task } from '../types';
import { CheckCircle, Circle, ChevronUp, ChevronDown } from 'lucide-react';

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  updateTaskStatus: (taskId: string, newStatus: 'todo' | 'done') => void;
  updateTaskPriority: (taskId: string, newPriority: number) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, tasks, updateTaskStatus, updateTaskPriority }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg flex-1">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="bg-white p-3 rounded shadow-sm mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => updateTaskStatus(task.id, task.status === 'todo' ? 'done' : 'todo')}
                className="mr-2 text-gray-500 hover:text-green-500"
              >
                {task.status === 'todo' ? <Circle size={20} /> : <CheckCircle size={20} />}
              </button>
              <span className={task.status === 'done' ? 'line-through text-gray-500' : ''}>{task.title}</span>
            </div>
            {task.status === 'todo' && (
              <div className="flex items-center">
                <button
                  onClick={() => updateTaskPriority(task.id, task.priority + 1)}
                  className="text-gray-500 hover:text-blue-500 mr-1"
                >
                  <ChevronUp size={20} />
                </button>
                <button
                  onClick={() => updateTaskPriority(task.id, Math.max(1, task.priority - 1))}
                  className="text-gray-500 hover:text-blue-500"
                >
                  <ChevronDown size={20} />
                </button>
                <span className="ml-2 text-sm text-gray-500">Priority: {task.priority}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KanbanColumn;