import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],
      updateStatus: id =>
        set(() => ({
          todos: get().todos.map(item => {
            if (item.id === id) {
              return { ...item, complete: !item.complete };
            }
            return item;
          }),
        })),
      addTodo: value =>
        set(() => ({
          todos: [
            ...get().todos,
            {
              id: Math.floor(Math.random() * 1000),
              text: value,
              complete: false,
            },
          ],
        })),
      deleteTodo: id =>
        set(() => ({ todos: get().todos.filter(item => item.id !== id) })),
    }),
    {
      name: 'TODO_LIST',
    },
  ),
);

export const useTodos = () => useTodoStore(state => state.todos);
