import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    styles: PropTypes.object,
  }

  styles = {
    wrapper: {
      position: 'relative',
      display: 'inline-block',
      zIndex: '98',
      color: '#555',
      cursor: 'help',
    },
    tooltip: {
      position: 'absolute',
      zIndex: '99',
      background: '#000',
      bottom: '100%',
      left: '50%',
      marginBottom: '10px',
      padding: '5px',
      WebkitTransform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)',
      OTransform: 'translateX(-50%)',
      transform: 'translateX(-50%)',
    },
    content: {
      background: '#000',
      color: '#fff',
      fontSize: '.8em',
      padding: '.3em 1em',
      whiteSpace: 'nowrap',
    },
    arrow: {
      position: 'absolute',
      width: '0',
      height: '0',
      bottom: '-5px',
      left: '50%',
      marginLeft: '-5px',
      borderLeft: 'solid transparent 5px',
      borderRight: 'solid transparent 5px',
      borderTop: 'solid #000 5px',
    },
    gap: {
      position: 'absolute',
      width: '100%',
      height: '20px',
      bottom: '-20px',
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    if (props.styles) this.mergeStyles(props.styles);
  }

  mergeStyles = (userStyles) => {
    Object.keys(this.styles).forEach((name) => {
      Object.assign(this.styles[name], userStyles[name]);
    });
  }

  show = () => this.setVisibility(true);

  hide = () => this.setVisibility(false);

  setVisibility = (visible) => {
    this.setState(Object.assign({}, this.state, {
      visible,
    }));
  }

  handleTouch = () => {
    this.show();
    this.assignOutsideTouchHandler();
  }

  assignOutsideTouchHandler = () => {
    const handler = (e) => {
      let currentNode = e.target;
      const componentNode = ReactDOM.findDOMNode(this.refs.instance);
      while (currentNode.parentNode) {
        if (currentNode === componentNode) return;
        currentNode = currentNode.parentNode;
      }
      if (currentNode !== document) return;
      this.hide();
      document.removeEventListener('touchstart', handler);
    }
    document.addEventListener('touchstart', handler);
  }

  render() {
    const {props, state, styles, show, hide, handleTouch} = this;
    return (
      <div
        onMouseEnter={show}
        onMouseLeave={hide}
        onTouchStart={handleTouch}
        style={styles.wrapper}>
        {props.children}
        {
          state.visible &&
          <div style={styles.tooltip}>
            <div style={styles.content}>{props.content}</div>
            <div style={styles.arrow}> </div>
            <div style={styles.gap}> </div>
          </div>
        }
      </div>
    )
  }
}