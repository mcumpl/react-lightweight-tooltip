import React from 'react';
import {Tooltip} from '../src/index';

const greyStyle = {
  content: {
    backgroundColor: 'grey',
    color: '#000',
  },
  tooltip: {
    backgroundColor: 'grey',
  },
  arrow: {
    borderTop: 'solid grey 5px',
  },
};

const GreyTooltip = () => {
  return (
    <div>
      <Tooltip
        content={
          [
            <img key="mcumplavatar" src="https://avatars0.githubusercontent.com/u/9491005" style={{ width: '100px', borderRadius: '50%' }} />,
            <div key="mcumplcaption" style={{ textAlign: 'center', padding: '10px 20px' }}>
              Hi there, I am <a href="https://github.com/mcumpl" target="_blank">Michal</a> and I wrote this to show how the tooltip looks when it contains a little more text than expected.
            </div>,
          ]
        }
        styles={greyStyle}>
        <span style={{fontSize:'5em'}}>&#9784;</span>
      </Tooltip>
    </div>
  );
}

export default GreyTooltip;   