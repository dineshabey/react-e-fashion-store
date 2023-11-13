import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Details, AllItems } from './layouts/layouts';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <AllItems /> */}
      {/* <Details /> */}


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all' element={<AllItems/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>

    </div>
  );
}

export default App;
