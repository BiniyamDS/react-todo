/* eslint-disable react/prop-types */
import { useTodoStore } from './useTodoStore';
import { useState } from 'react';

export function EditModal({ close, item }) {
  const [text, setText] = useState(item.text);
  const { updateTodo } = useTodoStore();
  return (
    <div>
      <input
        type='text'
        className='input-field'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className='btn bg-blue-500'
        onClick={() => {
          updateTodo(item.id, text);
          close();
        }}>
        Save
      </button>
      <button
        className='btn bg-red-500'
        onClick={close}>
        Close!
      </button>
    </div>
  );
}
