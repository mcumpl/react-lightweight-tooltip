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

const greenStyle = {
  wrapper: wrapperStyle.wrapper,
  content: {
    backgroundColor: 'green',
    color: '#000',

  },
  tooltip: {
    backgroundColor: 'green',
  },
  arrow: {
    borderTop: 'solid green 5px',
  },
};

export default class GreenTooltip extends React.Component {
  render() {
    return (
      <div>
        <h3>Hover (tap) over the boxes</h3>
        
        <Tooltip
          content={
            [
              'This repo is hosted on ',
              <a href="https://github.com" key="githublink" target="_blank">Github</a>,
            ]
          }
          styles={greenStyle}>
          Tooltip with a link
        </Tooltip>

      </div>
    );
  }
}