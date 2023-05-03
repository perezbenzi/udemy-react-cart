import { Component } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import Carro from '../Carro/Carro';

class Navbar extends Component {
  render() {
    const { carro } = this.props;
    return (
      <nav className="navbar">
        <Logo />
        <Carro carro={carro} />
      </nav>
    );
  }
}

export default Navbar;
