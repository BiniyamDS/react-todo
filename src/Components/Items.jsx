import Item from "./Item"

// Dummy data
const todos = [
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
]

const Items = () => {
  const isEmpty = todos.length === 0
  return (
    <div>
			<ul className={isEmpty ? 'flex' : ''}>
			{isEmpty ? <p className="text-gray-400 mx-auto py-8">No todos yet</p> : todos.map((item) => (
				<Item key={item.id} item={item}/>))}
			</ul>
    </div>
  )
}

export default Items