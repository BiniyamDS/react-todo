/* eslint-disable react/prop-types */
import InputTodo from './InputTodo';
import { useState } from 'react';
import { useTodoStore, useTodos } from './useTodoStore';

const Card = ({ children }) => {
  const [show, setShow] = useState(false);
  const { clearCompleted } = useTodoStore();

  const showClear = useTodos().length !== 0;

  function toggleAdd() {
    setShow(prevShow => !prevShow);
  }
  return (
    <div className='bg-white p-10 shadow-lg rounded-3xl w-1/2'>
      <div className='flex'>
        <h1 className='font-bold text-4xl mb-8'>Todo</h1>
        {showClear && (
          <button
            onClick={clearCompleted}
            className='ml-auto mb-8 bg-red-600 px-4 rounded-lg text-white hover:bg-red-700'>
            Clear completed
          </button>
        )}
      </div>
      {children}
      {show ? (
        <InputTodo toggle={toggleAdd} />
      ) : (
        <button
          onClick={toggleAdd}
          className='bg-gray-300 w-full rounded-lg p-2 mt-2'>
          Add Todo
        </button>
      )}
    </div>
  );
};

export default Card;
