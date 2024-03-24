/* eslint-disable react/prop-types */
import { useTodoStore } from './useTodoStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Item = ({ item }) => {
  const { updateStatus, deleteTodo } = useTodoStore();

  return (
    <div className='border-amber-100 mb-6 flex'>
      <input
        type='checkbox'
        onChange={() => updateStatus(item.id)}
        className='mr-4 align-middle appearance-none border border-gray-400 w-8 h-8 rounded-full cursor-pointer outline-none rounded-checkbox'
        name='todo'
        id='todo'
        checked={item.complete}
      />
      <label
        className={item.complete ? 'text-xl text-gray-400' : 'text-xl'}
        htmlFor='todo'
      >
        {item.text}
      </label>
      <button
        className='ml-auto'
        onClick={() => deleteTodo(item.id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Item;
