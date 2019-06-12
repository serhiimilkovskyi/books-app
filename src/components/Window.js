import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setIsMobile,
  setWindowResize,
  setWindowResizeFinished,
  setWindowOrientation,
  setOnline,
  setScroll,
} from '../actions/browser';

class Window extends Component {
  static propTypes = {
    setIsMobile: PropTypes.func.isRequired,
    setWindowResize: PropTypes.func.isRequired,
    setWindowResizeFinished: PropTypes.func.isRequired,
    setWindowOrientation: PropTypes.func.isRequired,
    setOnline: PropTypes.func.isRequired,
    children: PropTypes.element,
  }

  static defaultProps = {
    children: null,
  }

  constructor(props) {
    super(props);
    this.resizeTimeout = null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('orientationchange', this.onWindowFlip);
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('orientationchange', this.onWindowFlip);
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onWindowResize = (e) => {
    const { innerWidth, innerHeight } = e.currentTarget.window;
    this.props.setWindowResize(innerWidth, innerHeight);
    this.props.setIsMobile(innerWidth);
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.props.setWindowResizeFinished(innerWidth, innerHeight);
      clearTimeout(this.resizeTimeout);
    }, 200);
  }

  onWindowFlip = () => {
    this.props.setWindowOrientation(
      window.screen.orientation || window.screen.mozOrientation || window.screen.msOrientation,
    );
  }

  onOnline = () => {
    this.props.setOnline(true);
  }

  onOffline = () => {
    this.props.setOnline(false);
  }

  render() {
    return this.props.children;
  }
}

const actionCreators = {
  setIsMobile,
  setWindowResize,
  setWindowResizeFinished,
  setWindowOrientation,
  setOnline,
  setScroll,
};

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, actionCreators)(Window);
