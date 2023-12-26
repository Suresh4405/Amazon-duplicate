import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar/Navbar";

import Caroselslide from "./carosel/Caroselslide"

import Card from './Card/Card';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Search from './Navbar/Search';





const App = () => {

  return (
    <div>
      
<Provider store={store}>
<Navbar/>
<Caroselslide/>
<Card/>
</Provider>

{/* <Search/> */}


    </div>
  );
}

export default App;
