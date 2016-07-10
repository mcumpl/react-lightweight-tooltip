import React, {PropTypes} from 'react';
//import Radium from 'radium';
class Tooltip extends React.Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    content:  React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
  }

  static defaultProps = {

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
      webKitTransform: 'translateY(10px)',
      MozTransform: 'translateY(10px)',
      msTransform: 'translateY(10px)',
      OTransform: 'translateY(10px)',
      transform: 'translateY(10px)',
      webKitTransition: 'all .25s ease-out',
      MozTransition: 'all .25s ease-out',
      msTransition: 'all .25s ease-out',
      OTransition: 'all .25s ease-out',
      transition: 'all .25s ease-out',
      webKitBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
      MozBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
      msBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
      OBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
      boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
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
  }

  show = () => {
    this.setState(Object.assign(this.state, {
      visible: true,
    }));
  }

  hide = () => {
    this.setState(Object.assign(this.state, {
      visible: false,
    }));
  }

  render() {
    const {props, state, styles, show, hide} = this;
    return (
      <div onMouseEnter={show} onMouseLeave={hide} style={styles.wrapper}>{props.children}
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

export default Tooltip;