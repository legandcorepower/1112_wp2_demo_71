import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home_71 from './pages/Home_71';
import About_71 from './pages/About_71';
import SingleCocktail_71 from './pages/SingleCocktail_71';
import Error_71 from './pages/Error_71';
// import components
import Navbar_71 from './components/Navbar_71';
function App_71() {
  return (
    <Router>
      <Navbar_71 />
      <Routes>
        <Route path='/' element={<Home_71/>} />
        <Route path='/about' element={<About_71/>} />
        <Route path='/cocktail/:id' element={<SingleCocktail_71/>} />
        <Route path='/*' element={<Error_71/>} />
      </Routes>
    </Router>
  );
}

export default App_71;
