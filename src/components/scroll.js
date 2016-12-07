import  React,{Component} from 'react';


export default class Scroll extends Component {

  constructor(props) {
    super(props);



    if (!document.querySelector("style[jui-scroll]")) {
      let head = document.querySelector("head");
      let style = document.createElement('style');
      style.setAttribute('jui-scroll','');
      head.appendChild(style);
    }


  }

  render() {

    const jwscroll = {
      'position': 'relative',
      'boxSizing': 'border-box',
      'width': '200px',
      'overflow': 'hidden'
    }

    const jwscrollInner = {
      'height': '200px',
      'overflowY': 'scroll',
      'overflowX': 'hidden',
    }

    const jwscrollSc = {
      'position': 'absolute',
      'boxSizing': 'border-box',
      'top': '0',
      'bottom': '0',
      'right': '0',
      'width': '7px'
    }
    const jwscrollPs = {
      'position': 'absolute',
      'borderRadius': '5px',
      'backgroundColor': 'green',
      'left': '0',
      'right': '0',
      'opacity': '0',
      'cursor': 'default',
      'transition': 'opacity 800ms ease'
    }

    const jwscrollPsShow = {
      'opacity': 1,
      'transition': 'opacity 300ms ease'
    };

    /*
    jwscrollInner::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    */


    return (
      <div style={jwscroll}>
        <div style={jwscrollInner}>
        </div>
      </div>
    );
  }
}
