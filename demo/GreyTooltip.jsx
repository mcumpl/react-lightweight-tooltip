import React from 'react';
import {Tooltip} from '../src/index';

const greyStyle = {
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
    backgroundColor: 'grey',
    color: '#000',
  },
  tooltip: {
    backgroundColor: 'grey',
    width: '400px',
  },
  arrow: {
    borderTop: 'solid grey 5px',
  },
};

export default class GreyTooltip extends React.Component {
  render() {
    return (
      <div>
        <Tooltip
          content={
            [
              <img key="mcumplavatar" src="https://avatars0.githubusercontent.com/u/9491005" style={{ width: '100px', borderRadius: '50%' }} />,
              <div key="mcumplcaption" style={{ textAlign: 'center', padding: '10px 20px' }}>
                Hi there, I am <a href="https://github.com/mcumpl" target="_blank">Michal</a> and I wrote this text that is longer than expected 
                to show you how large the tooltip can be and how it looks. 
              </div>,
            ]
          }
          styles={greyStyle}>
          Grey tooltip with a long content
        </Tooltip>

      </div>
    );
  }
}