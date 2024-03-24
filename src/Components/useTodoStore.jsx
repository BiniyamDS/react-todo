import { create } from 'zustand';

export const useTodoStore = create(set => ({
  todos: [],
  updateStatus: id =>
    set(state => ({
      todos: state.todos.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      }),
    })),
  addTodo: value =>
    set(state => ({
      todos: [
        ...state.todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: value,
          complete: false,
        },
      ],
    })),
  deleteTodo: id =>
    set(state => ({ todos: state.todo.filter(item => item.id !== id) })),
}));

export const useTodos = () => useTodoStore(state => state.todos);
