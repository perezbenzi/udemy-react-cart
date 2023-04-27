import { Component } from 'react';
import Button from '../Button/Button';

const style = {
  producto: {
    boxShadow: '2px 2px 100px 1px rgb(0, 0, 0, 0.1)',
    margin: '20px',
    padding: '18px',
    backgroundColor: '#ffffff',
  },
  img: {
    width: '300px',
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;

    return (
      <div style={style.producto}>
        <img style={style.img} src={producto.img} alt={producto.name} />
        <h4>{producto.price}</h4>
        <h3>{producto.name}</h3>
        <Button onClick={() => agregarAlCarro(producto)}>Agregar al carrito</Button>
      </div>
    );
  }
}

export default Producto;
