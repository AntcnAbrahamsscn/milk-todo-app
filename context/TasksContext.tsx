// TasksContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ITodo from '@/assets/@types/ITodo';

interface TasksContextProps {
    tasks: ITodo[];
    setTasks: React.Dispatch<React.SetStateAction<ITodo[]>>;
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const TasksContext = createContext<TasksContextProps | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<ITodo[]>([
        { id: 1, task: "Eat lunch", completed: false },
        { id: 2, task: "Do laundry", completed: true },
        { id: 3, task: "Learn context", completed: false },
        { id: 4, task: "Get better", completed: true },
        { id: 5, task: "Grow up", completed: true },
        { id: 6, task: "Have fun!", completed: true },
    ]);

    const [count, setCount] = useState<number>(0);

    return (
        <TasksContext.Provider value={{ tasks, setTasks, count, setCount }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTasksContext must be used within a TasksProvider");
    }
    return context;
};
