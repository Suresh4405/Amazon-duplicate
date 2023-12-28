import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar/Navbar";

import Caroselslide from "./carosel/Caroselslide"

import Card from './Card/Card';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Design from './description/Design';





const App = () => {

  return (
    <div>
      
<Provider store={store}>
<Navbar/>
<Caroselslide/>
<Card/>
</Provider> 



 {/* <Design/>  */}
 {/* <Card/> */}
    </div>
  );
}

export default App;
