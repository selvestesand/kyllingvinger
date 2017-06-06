import React, { Component } from 'react';
import WingStore from '../stores/WingStore';
import wingPic1 from '../img/wings1.png';
import wingPic2 from '../img/wings2.png';
import wingPic3 from '../img/wings3.png';
import wingPic4 from '../img/wings4.png';
import wingPic5 from '../img/wings5.png';
import wingPic6 from '../img/wings6.png';
import wingPic7 from '../img/wings7.png';
import wingPic8 from '../img/wings8.png';

class Tiles extends Component {

  

  render() {
    return (
          <div className="container">
              <div id="0" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="1" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="2" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="3" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="4" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="5" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="6" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="7" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="8" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="9" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="10" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="11" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="12" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="13" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="14" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
              <div id="15" className="panel panel-default col-lg-3 col-sm-3 col-xs-3"><img /></div>
          </div>
    );
  }
}

export default Tiles;
