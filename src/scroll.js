import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Scroll from './components/scroll.js';

ReactDOM.render(
  <div>
    <h1>Scroll</h1>
    <h3>- Always visible scroll.</h3>
    <Scroll
      option={{scrollShowAlways: true}}
    >
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
    </Scroll>
    <br />

    <h3>- Shameful scroll.</h3>
    <Scroll 
      option={{scrollShowAlways: false}}
    >
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}></div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}></div>
    </Scroll>
  </div>,
  document.getElementById('scroll')
)
