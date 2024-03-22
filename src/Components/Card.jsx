/* eslint-disable react/prop-types */

const Card = ({ children }) => {
  return (
        <div className="bg-white p-6 shadow-lg rounded-xl w-2/5">
            <h1 className="text-2xl font-bold">Todo</h1>
            {children}
        </div>
  )
}

export default Card