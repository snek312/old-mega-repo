import React from 'react';
import './styles/style.css';

import Navbar from './components/Navbar';
import AsideNavbar from './components/AsideNavbar';
import AsideMenu from './components/AsideMenu';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AsideNavbar />
      <AsideMenu />
    </div>
  );
}

export default App;
