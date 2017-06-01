import React, { Component } from 'react';
import Todos from './pages/Todos';

class App extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">

                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Kyllingvinger</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#">ToDos <span className="sr-only">(current)</span></a></li>
                  </ul>
                  <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="New Todo"/>
                    </div>
                    <button type="submit" className="btn btn-default">Create</button>
                  </form>

                </div>
              </div>
            </nav>
            <Todos />
            </div>
    );
  }
}

export default App;
