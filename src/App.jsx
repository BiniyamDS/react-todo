import Card from './Components/Card';
import Items from './Components/Items';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-purple-300 to-orange-500 flex justify-center items-center h-screen'>
      <Card>
        <Items />
      </Card>
    </div>
  );
};

export default App;
