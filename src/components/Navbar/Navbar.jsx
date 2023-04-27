import { Component } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import Carro from '../Carro/Carro';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo />
        <Carro />
      </nav>
    );
  }
}

export default Navbar;
