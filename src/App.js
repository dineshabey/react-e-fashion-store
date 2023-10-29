import './App.css';
import AllItemsLayouts from './layouts/AllItemsLayouts';
import HomeLayouts from './layouts/HomeLayouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetailsLayouts from './layouts/ProductDetailsLayouts';

function App() {
  return (
    <div className='App'>
      {/* <HomeLayouts /> */}
      {/* <AllItemsLayouts /> */}
      <ProductDetailsLayouts />
    </div>
  );
}

export default App;
