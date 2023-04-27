import { Component } from 'react';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="layout-container">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
