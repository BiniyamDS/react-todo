import { create } from "zustand";

export const useTodoStore = create((set) => (
    {
        todos: [
            {
                id: 1,
                text: 'Finish writing doc',
                complete: true,
            },
            {
                id: 2,
                text: 'Share update with team',
                complete: false,
            },
            {
                id: 3,
                text: 'Pre-launch checklist',
                complete: false,
            }
        ],
        updateStatus: (id) => set((state) => ({todos: state.todos.map((item) => {
            if (item.id === id) {
                return ({...item, complete:!item.complete})
            }
            return item
        })}))
    }
))

export const useTodos = () => useTodoStore(state => state.todos)