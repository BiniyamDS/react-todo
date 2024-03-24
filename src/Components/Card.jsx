/* eslint-disable react/prop-types */

const Card = ({ children }) => {
  return (
        <div className="bg-white p-10 shadow-lg rounded-3xl w-1/3">
            <h1 className="font-bold text-4xl mb-8">Todo</h1>
            {children}
        </div>
  )
}

export default Card