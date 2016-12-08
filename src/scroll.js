import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Scroll from './components/scroll.js';

ReactDOM.render(
  <div>
    <Scroll>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>b</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>b</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>c</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>c</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>d</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>d</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>e</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>e</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>a</div>
    </Scroll>

    <Scroll width='200px'>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>b</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>b</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>c</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>c</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>d</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>d</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>e</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>e</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#ebebeb'}}>a</div>
      <div style={{'width': '100%','height': '30px','backgroundColor': '#fff'}}>a</div>
    </Scroll>
  </div>,
  document.getElementById('scroll')
)
