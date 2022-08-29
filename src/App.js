import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './Components/Header';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
