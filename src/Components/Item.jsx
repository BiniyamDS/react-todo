/* eslint-disable react/prop-types */
const Item = ({ item }) => {
	return (
    <div className="border-amber-100 mb-6">
        <input type="checkbox" 
				className="mr-4 align-middle appearance-none border border-gray-400 w-8 h-8 rounded-full cursor-pointer outline-none rounded-checkbox"
				name="todo" id="todo" defaultChecked={item.complete} />
        <label  className={item.complete ? 'text-xl text-gray-400' : 'text-xl'} htmlFor="todo">{item.text}</label>
    </div>
  )
}

export default Item