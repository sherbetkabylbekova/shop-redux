import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux"

const Header = () => {
    const cart = useSelector(store => store.cart)
    return (
     <header>
         <nav className="navbar navbar-expand-lg navbar-light bg-danger">
             <div className="container">
                 <a className="navbar-brand" href="#">Navbar</a>
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                         <NavLink className="nav-link" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                         <NavLink className="nav-link" to="/cart">Cart({cart.length})</NavLink>
                     </li>
                 </ul>
             </div>
         </nav>
     </header>
    );
};

export default Header;