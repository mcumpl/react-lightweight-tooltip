import React from 'react';
import {Tooltip} from '../src/index';

const greenRoundedStyle = {
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

const GreenRoundedTooltip = () => {
  return (
    <Tooltip
      content={
        [
          'This repo is hosted on ',
          <a href="https://github.com" key="githublink" target="_blank">Github</a>,
        ]
      }
      styles={greenRoundedStyle}>
      <span style={{fontSize:'5em'}}>&#10031;</span>
    </Tooltip>
  );
}

export default GreenRoundedTooltip;