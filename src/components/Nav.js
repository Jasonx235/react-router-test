import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {

  render(){
  return (
    <div>
        <nav>
        <Link to="/"className="navLink">
        <li>Home</li>
        </Link>
        <Link to="/about" className="navLink">
        <li>About</li>
        </Link>
        <Link to="/shop" className="navLink">
        <li>Shop</li>
        </Link>
        </nav>
    </div>
  );
  }
}

export default Nav;
