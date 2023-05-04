import { Component } from 'react';
import './DetallesCarro.css';

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;

    return (
      <div className="detalles-carro">
        <ul className="ul">
          {carro.map((x) => (
            <li className="producto" key={x.name}>
              <img style={{ width: '50px', margin: '1px' }} src={x.img} alt={x.name} />
              {x.name} <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
