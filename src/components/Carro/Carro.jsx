import { Component } from 'react';
import BubbleAlert from '../BubbleAlert/BubbleAlert';
import './Carro.css';
import Button from '../Button/Button';

class Carro extends Component {
  render() {
    return (
      <div>
        <span className="bubble">
          <BubbleAlert />
        </span>
        <Button>Carrito</Button>
      </div>
    );
  }
}

export default Carro;
