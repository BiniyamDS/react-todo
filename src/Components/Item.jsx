/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  console.log("hello")
	console.log(item.complete)
	return (
    <div className="py-2">
        <input type="checkbox" 
				className="mr-2 rounded-full"
				name="todo" id="todo" defaultChecked={item.complete} />
        {item.text}
    </div>
  )
}

export default Item