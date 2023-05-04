import { Component } from 'react';
import BubbleAlert from '../BubbleAlert/BubbleAlert';
import './Carro.css';
import Button from '../Button/Button';
import DetallesCarro from '../DetallesCarro/DetallesCarro';

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

    return (
      <div>
        <span className="bubble">{cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}</span>
        <Button onClick={mostrarCarro}>Carrito</Button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
