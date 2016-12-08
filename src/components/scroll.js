import  React,{Component} from 'react';
import Util from '../lib/Util';



export default class Scroll extends Component {

  constructor(props) {
    super(props);

    this.scrollWrap = null;
    this.scrollInner = null;
    this.ps = null;
    this.sc = null;
    this.rating = 0;
    this.op = (this.props.option)?this.props.option:{};

    this.scrollDragStandard = [];
    this.drag = false;
    this.scrollTime = null;
    this.util = new Util();

    this.isWebkit = 'WebkitAppearance' in document.documentElement.style;

  }

  componentWillMount() {
  }

  componentDidMount() {
    if (this.isWebkit !== true) {
      this.hiddenScroll();
    }
    this.addScroll();
    this.makeScrollPosition();
    this.setScrollTop();
    this.initEvent();
  }

  hiddenScroll() {
    var jwscrollWrap = this.scrollWrap;
    var jwscroll = this.scrollInner;
    var scrollWeight = jwscroll.offsetWidth - jwscroll.clientWidth;
    var changeWidth = jwscroll.clientWidth - scrollWeight;
    jwscroll.style.width = jwscroll.clientWidth+"px";
    jwscrollWrap.style.width = changeWidth+"px";
  }

  addScroll() {
    var jwscrollWrap = this.scrollWrap;
    this.sc = document.createElement("div");
    this.ps = document.createElement("div");
    this.ps.className = "ps";
    this.sc.className = "sc";

    this.sc.appendChild(this.ps);
    jwscrollWrap.appendChild(this.sc);
  }


  makeScrollPosition() {
    var jwscroll = this.scrollInner;
    var ps = this.ps;
    var scrollHeight = jwscroll.scrollHeight;
    var clientHeight = jwscroll.clientHeight;
    var posHeight = parseInt(clientHeight * (clientHeight/scrollHeight));
    ps.style.height = posHeight+"px";
    if (this.op.scrollShowAlways === true) ps.style.opacity = 1;
  }

  setScrollTop() {
    var jwscroll = this.scrollInner;
    var ps = this.ps;
    var scrollHeight = jwscroll.scrollHeight;
    var clientHeight = jwscroll.clientHeight;
    this.rating = clientHeight/scrollHeight;
    var scrollTop = jwscroll.scrollTop * this.rating;
    ps.style.top = scrollTop+"px";
  }

  scrollShy() {
    var self = this;
    var ps = this.ps;
    self.util.addClass(ps, 'show');
    clearTimeout(this.scrollTime);
    self.scrollTime = setTimeout(function() {
      self.util.removeClass(ps, 'show');
    },1000);
  }

  initEvent() {

    var self = this;

    document.addEventListener('mousemove', function(evt) {
      if (self.drag) {
        var changePx = evt.screenY - self.scrollDragStandard[0];
        var changeTop = changePx / self.rating;
        var scrollTop = self.scrollDragStandard[1] + changeTop;
        self.scrollInner.scrollTop = scrollTop;
      }
    });
    self.ps.addEventListener('mousedown', function(evt) {
      self.scrollDragStandard[0] = evt.screenY;
      self.scrollDragStandard[1] = self.scrollInner.scrollTop;
      self.drag = true;
    });
    self.ps.addEventListener('mouseup', function() {
      self.drag = false;
    });
    document.addEventListener('mouseup', function() {
      self.drag = false;
    });
    self.scrollInner.addEventListener('mouseenter', function() {
      self.scrollShy();
    });
    self.sc.addEventListener('mouseenter', function() {
      self.util.addClass(self.ps, 'show');
    });
    self.sc.addEventListener('mouseleave', function() {
      self.util.removeClass(self.ps, 'show');
    });
    self.scrollInner.addEventListener('scroll', function() {
      self.setScrollTop();
      self.scrollShy();
    });
    self.scrollInner.addEventListener('DOMSubtreeModified', function() {
      self.makeScrollPosition();
      self.setScrollTop();
    });

    if (self.isWebkit !== true) {
      window.addEventListener('resize',function() {
        var jwscrollWrap = self.scrollWrap;
        var jwscroll = self.scrollInner;
        jwscroll.removeAttribute("style");
        jwscrollWrap.removeAttribute("style");


        if (self.props.width) {
          jwscrollWrap.style.width = self.props.width;
        }

        self.hiddenScroll();
      });
    }
  }


  render() {

    const style = {};

    if (this.props.width) {
      style.width = this.props.width;
    }

    return (
      <div 
        className='jwscroll' 
        style={style}
        ref={(scrollWrap) => this.scrollWrap = scrollWrap}
      >
        <div 
          className='jwscroll-inner'
          ref={(scrollInner) => this.scrollInner = scrollInner}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
