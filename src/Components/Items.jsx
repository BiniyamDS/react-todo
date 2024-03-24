import Item from './Item';
import { useTodos } from './useTodoStore';

// Dummy data
// const todos_old = [
//     {
//         id: 1,
//         text: 'Finish writing doc',
//         complete: true,
//     },
//     {
//         id: 2,
//         text: 'Share update with team',
//         complete: false,
//     },
//     {
//         id: 3,
//         text: 'Pre-launch checklist',
//         complete: false,
//     }
// ]

const Items = () => {
  const todos = useTodos();
  const isEmpty = todos.length === 0;
  return (
    <div>
      <ul className={isEmpty ? 'flex' : ''}>
        {isEmpty ? (
          <p className='text-2xl text-gray-400 mx-auto mb-14'>No todos yet</p>
        ) : (
          todos.map(item => <Item key={item.id} item={item} />)
        )}
      </ul>
    </div>
  );
};

export default Items;
