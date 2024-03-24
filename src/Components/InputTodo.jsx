/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useTodoStore } from './useTodoStore';

const InputTodo = ({ toggle }) => {
  const ref = useRef();
  const { addTodo } = useTodoStore();

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTodo(event.target.value);
      event.target.value = '';
    }
    if (event.key === 'Escape') {
      toggle();
    }
  }

  useEffect(() => ref.current.focus(), []);

  return (
    <div className='flex'>
      <input
        ref={ref}
        className='border-b-2 w-full outline-none h-10 text-2xl'
        type='text'
        placeholder='Enter your todos'
        onKeyDown={handleKeyDown}
        name='todo-input'
        id='todo-input'
      />
      <button onClick={toggle}>
        <FontAwesomeIcon
          className='w-6 h-6'
          icon={faXmark}
        />
      </button>
    </div>
  );
};

export default InputTodo;
