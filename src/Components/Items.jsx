import Item from "./Item"

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
  return (
    <div>
			<ul>
			{todos.map((item) => (
				<Item key={item.id} item={item}/>))}
			</ul>
    </div>
  )
}

export default Items