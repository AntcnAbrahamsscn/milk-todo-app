// store/store.ts
import { create } from 'zustand';
import ITodo from '@/assets/@types/ITodo';
import mockdata from './mockdata.json';

interface TasksContextProps {
    tasks: ITodo[];
    fetchAllTasks: () => Promise<void>;
    loading: boolean;
    createTask: (task: ITodo) => Promise<void>;
    updateTask: (id: number, newTaskName: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
    count: number;
    setCount: (newCounterNumber: number) => void;
}

// Fetch
export const fetchTasks = async (): Promise<ITodo[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockdata), 1000);
    });
};

export const addTask = async (task: ITodo): Promise<void> => {
    mockdata.push(task);
};


const useStore = create<TasksContextProps>((set) => ({
    tasks: [],
    loading: false,
    
    fetchAllTasks: async () => {
        set({ loading: true });
        try {
            const tasks = await fetchTasks();
            set({ tasks });
        } finally {
            set({ loading: false });
        }
    },
    
    createTask: async (task: ITodo) => {
        await addTask(task);
        set((state) => ({ tasks: [...state.tasks, task] }));
    },

    updateTask: (id, newTaskName) => {
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, task: newTaskName } : task
            ),
        }));
    },
    
    toggleTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        }));
    },
    
    deleteTask: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        }));
    },

    count: 0,
    setCount: (newCounterNumber: number) => set({ count: newCounterNumber })
}));

export default useStore;
