import React from 'react';
import {Tooltip} from '../../src/index';

const wrapperStyle = {
  wrapper: {
    background: '#ececec',
    color: '#555',
    margin: '30px 10px 10px 10px',
    padding: '15px 20px',
    textAlign: 'center',
    width: '195px',
    display: 'inline-block',
  },
};

export default class DefaultTooltip extends React.Component {
  render() {
    return (
      <div>
        <h3>Hover (tap) over the boxes</h3>
        <Tooltip content="Yes, the default one" styles={wrapperStyle}>Simple tooltip</Tooltip>
      </div>
    );
  }
}