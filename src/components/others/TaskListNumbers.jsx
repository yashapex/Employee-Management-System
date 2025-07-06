import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const TaskListNumbers = ({ data }) => {
  const [userData,setUserData] = useContext(AuthContext);
  const employee = userData.find(emp => emp.id === data.id);

  const total = Object.values(employee.taskCounts).reduce((a, b) => a + b, 0) || 1;

  const stats = [
    { label: 'New Task', count: employee.taskCounts.newTask, color: '#3b82f6' },     // blue
    { label: 'Completed Task', count: employee.taskCounts.completed, color: '#22c55e' }, // green
    { label: 'Active Task', count: employee.taskCounts.active, color: '#facc15' },   // yellow
    { label: 'Failed Task', count: employee.taskCounts.failed, color: '#ef4444' },   // red
  ];

  return (
    <div className="w-full mt-10 px-4">
      <div className="  grid grid-cols-2 sm:grid-cols-4 
                        gap-6 justify-center 
                        max-w-5xl mx-auto">
        {stats.map((item, index) => {
          const percent = Math.round((item.count / total) * 100);
          const gradient = `conic-gradient(${item.color} ${percent * 3.6}deg, #1f2937 0deg)`; // #1f2937 = gray-800 bg

          return (
            <div key={index} className="fade-up 
                                        flex flex-col items-center space-y-2">
              <div
                className=" w-24 h-24 sm:w-30 sm:h-30 
                            rounded-full relative"
                style={{
                  backgroundImage: gradient,
                }}
              >
                <div className="absolute inset-2 
                                rounded-full 
                                bg-gray-900 
                                flex items-center justify-center">
                  <span className=" text-white 
                                    font-bold 
                                    text-xl sm:text-3xl">
                        {item.count}
                    </span>
                </div>
              </div>
              <p className="text sm:font-medium text-gray-300">{item.label}</p>
              <p className="text-xs text-gray-500">{percent}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskListNumbers;
