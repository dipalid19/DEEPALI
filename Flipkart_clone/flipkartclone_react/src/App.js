import { Route, Routes } from "react-router-dom";
import Allproducts from "./components/Allproducts";
import Header from "./components/header";
import Home from "./components/home";
import Cart from "./components/cart";


function App() {
  
  return <>
  
  <Header/>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route  path="/products"  element={<Allproducts/>}/>
    <Route  path="/cart"  element={<Cart/>}/>
    
    </Routes>
  </>
}

export default App;
