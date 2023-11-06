import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeLayuouts from './layouts/home/HomeLayouts';
// import AllItemsLayouts from './layouts/allItem/AllItemsLayouts';
import ProductDetailsLayouts from './layouts/productsDetails/ProductDetailsLayouts';

function App() {
  return (
    <div className='App'>
      {/* <HomeLayuouts/> */}
      {/* <AllItemsLayouts/> */}
      <ProductDetailsLayouts/>
    </div>
  );
}

export default App;
