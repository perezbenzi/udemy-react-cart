import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return <button {...this.props} className="btn" />;
  }
}

export default Button;
