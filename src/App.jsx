import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Product_det from "./pages/Product_det";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout  from "./pages/Checkout";




function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/product"element={<Product/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/product_det/:product_id"element={<Product_det/>}/>
        <Route path="/login"element={<Login/>}/>     
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        
        </Routes>
        </BrowserRouter>

    )
}
export default App;