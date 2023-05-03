import { Component } from 'react';
import BubbleAlert from '../BubbleAlert/BubbleAlert';
import './Carro.css';
import Button from '../Button/Button';

class Carro extends Component {
  render() {
    const { carro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span className="bubble">{cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}</span>
        <Button>Carrito</Button>
      </div>
    );
  }
}

export default Carro;
