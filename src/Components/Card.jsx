/* eslint-disable react/prop-types */
import InputTodo from './InputTodo';
import { useState } from 'react';

const Card = ({ children }) => {
  const [show, setShow] = useState(false);

  function toggleAdd() {
    setShow(prevShow => !prevShow);
  }
  return (
    <div className='bg-white p-10 shadow-lg rounded-3xl w-1/2'>
      <h1 className='font-bold text-4xl mb-8'>Todo</h1>
      {children}
      {show ? (
        <InputTodo toggle={toggleAdd} />
      ) : (
        <button
          onClick={toggleAdd}
          className='bg-gray-300 w-full rounded-lg p-2 mt-2'
        >
          Add Todo
        </button>
      )}
    </div>
  );
};

export default Card;
