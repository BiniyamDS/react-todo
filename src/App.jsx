import Card from './Components/Card';
import Items from './Components/Items';

const App = () => {
  return (
    <div className='bg-gray-200 flex justify-center items-center h-screen'>
      <Card>
        <Items />
      </Card>
    </div>
  );
};

export default App;
