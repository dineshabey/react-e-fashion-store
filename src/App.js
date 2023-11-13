import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Details, AllItems, NotFound, Cart } from './layouts/layouts';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllItems />} />
        <Route path='/details' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
