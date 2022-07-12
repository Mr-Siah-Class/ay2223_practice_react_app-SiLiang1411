import React from 'react';
import './App.css';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductScreen';
import NoScreen from './screens/NoScreen';
import FooterBar from './components/FooterBar';
import SingleProductScreen from './screens/SingleProductScreen';

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
                <NavBar/>

                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<SingleProductScreen/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
                
                <FooterBar/>
            </div>
        );
    }
}

export default App;

