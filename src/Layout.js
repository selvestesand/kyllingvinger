import React, { Component } from 'react';
import Tiles from './components/Tiles';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">

                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Kyllingvinger</a>
                </div>


              </div>
            </nav>

            <Tiles />

            </div>
    );
  }
}

export default Layout;
