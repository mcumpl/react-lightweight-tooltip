import React from 'react';
import {Tooltip} from '../src/index';

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

const greyStyle = {
  wrapper: wrapperStyle.wrapper,
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

let trns = [];
for(let i=0; i<10; i++) {
  trns[i] = {
    id: i+1,
    desc: 'Coffeeshop Siberia Amsterdam',
    amount: '$' + Math.floor(Math.random() * 100),
    type: Math.floor(Math.random() * (2 - 0 + 1)) + 0,
  };
}

const styles = {
  td: {
    padding: '15px',
    margin: '15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  a: {
    color: '#fff',
  },
};

const trnTypes = [
  'Deposit transaction',
  'POS transaction',
  'Withdrawal transaction',
];

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <h3>Hover (tap) over the boxes</h3>
        <Tooltip content="Yes, the default one" styles={wrapperStyle}>Simple tooltip</Tooltip>

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

        <Tooltip
          content={
            [
              <img key="mcumplavatar" src="https://avatars0.githubusercontent.com/u/9491005" style={{ width: '100px', borderRadius: '50%' }} />,
              <div key="mcumplcaption" style={{ textAlign: 'center', padding: '10px 20px' }}>
                Hi there, I am <a href="https://github.com/mcumpl" target="_blank">Michal</a> and I love corrida de toros! <em>Not...</em>
              </div>,
            ]
          }
          styles={greyStyle}>
          Tooltip with a rich content
        </Tooltip>

        <h3>Hover (tap) over the description</h3>

        <table>
          <thead>
            <tr>
              <th style={styles.td}>Id</th>
              <th style={styles.td}>Description</th>
              <th style={styles.td}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              trns.map((trn) => {
                return (
                  <tr key={trn.id}>
                    <td style={styles.td}>{trn.id}</td>
                    <td style={styles.td}><Tooltip content={trnTypes[trn.type]}>{trn.desc}</Tooltip></td>
                    <td style={styles.td}>{trn.amount}</td>
                  </tr>);
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}