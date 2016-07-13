import React, {PropTypes} from 'react';

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
      zIndex: '998',
      color: '#555',
      cursor: 'help',
    },
    tooltip: {
      position: 'absolute',
      zIndex: '999',
      bottom: '100%',
      left: '-5px',
      marginBottom: '20px',
      padding: '5px',
      width: '100%',
      background: '#000',
    },
    content: {
      background: '#000',
      padding: '.3em 1em',
      color: '#fff',
      whiteSpace: 'normal',
      overflow: 'auto',
    },
    arrow: {
      borderLeft: 'solid transparent 5px',
      borderRight: 'solid transparent 5px',
      borderTop: 'solid #000 5px',
      bottom: '-5px',
      height: '0',
      left: '50%',
      marginLeft: '-5px',
      position: 'absolute',
      width: '0',
    },
    gap: {
      bottom: '-20px',
      display: 'block',
      height: '20px',
      left: '0',
      position: 'absolute',
      width: '100%',
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    if (props.styles) this.updateStyles(props.styles);
  }

  componentWillReceiveProps(props) {
    if (props.styles) this.updateStyles(props.styles);
  }

  updateStyles = (userStyles) => {
    Object.keys(this.styles).forEach((name) => {
      Object.assign(this.styles[name], userStyles[name]);
    });
  }

  show = () => {
    this.setState({}, Object.assign(this.state, {
      visible: true,
    }));
  }

  hide = () => {
    this.setState({}, Object.assign(this.state, {
      visible: false,
    }));
  }

  render() {
    const {props, state, styles, show, hide} = this;
    return (
      <div 
        onMouseEnter={show} 
        onMouseLeave={hide} 
        onTouchStart={show} 
        onTouchEnd={hide}
        onScroll={hide} 
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