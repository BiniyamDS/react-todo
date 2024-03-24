import Item from './Item';
import { useTodos } from './useTodoStore';

const Items = () => {
  const todos = useTodos();
  const isEmpty = todos.length === 0;
  return (
    <div>
      <ul className={isEmpty ? 'flex' : ''}>
        {isEmpty ? (
          <p className='text-2xl text-gray-400 mx-auto mb-14'>No todos yet</p>
        ) : (
          todos.map(item => (
            <Item
              key={item.id}
              item={item}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Items;
