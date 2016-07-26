import React from 'react';
import {Tooltip} from '../src/index';

const greenRoundedStyle = {
  wrapper: {
    background: '#ececec',
    color: '#555',
    margin: '30px 10px 10px 10px',
    padding: '15px 20px',
    textAlign: 'center',
    width: '195px',
    display: 'inline-block',
  },
  content: {
    backgroundColor: 'green',
    color: '#000',
  },
  tooltip: {
    backgroundColor: 'green',
    borderRadius: '10px',
  },
  arrow: {
    borderTop: 'solid green 5px',
  },
};

export default class GreenRoundedTooltip extends React.Component {
  render() {
    return (
      <div>
        <Tooltip
          content={
            [
              'This repo is hosted on ',
              <a href="https://github.com" key="githublink" target="_blank">Github</a>,
            ]
          }
          styles={greenRoundedStyle}>
          Green tooltip with rounded corners and a link
        </Tooltip>

      </div>
    );
  }
}