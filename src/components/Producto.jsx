import { Component } from 'react';
import Button from './Button/Button';

const style = {
  producto: {
    border: 'solid',
    boxShadow: '0px 5px 5px 0px #000001',
  },
};

class Producto extends Component {
  render() {
    const { producto } = this.props;

    return (
      <div style={style.producto}>
        <img src={producto.img} alt={producto.name} />
        <h3>{producto.price}</h3>
        <h1>{producto.name}</h1>
        <Button>Agregar al carrito</Button>
      </div>
    );
  }
}

export default Producto;
