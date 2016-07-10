import React from 'react';
import {Tooltip} from '../src/index';

const trns = [
  {
    date: '2010/01/01',
    desc: 'AH Amsterdam',
    amount: '$22.50',
    type: 0,
  },
  {
    date: '2010/01/02',
    desc: 'Coffeeshop Siberia Amsterdam',
    amount: '$238.00',
    type: 1,
  },
  {
    date: '2010/01/03',
    desc: 'H&M Amsterdam',
    amount: '$122.70',
    type: 2,
  },
];

const styles = {
  td: {
    padding: '15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  a: {
    color: '#fff',
  },
};

const trnTypes = [
  'Deposit transaction ksdjhf  jsdk fjsdk fuskfsdkfjsdkfjkf skd fksdjf   sdjkfsd kjdkjkjsfd kj jkdjs ksdf',
  'POS transaction',
  ['Withdrawal transaction ', <a href="https://www.vzp.cz" key="vzplink" style={styles.a}>link</a>],
];

export default class Demo extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th style={styles.td}>Date</th>
            <th style={styles.td}>Description</th>
            <th style={styles.td}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            trns.map((trn) => {
              return (
                <tr key={trn.date}>
                  <td style={styles.td}>{trn.date}</td>
                  <td style={styles.td}><Tooltip content={trnTypes[trn.type]}>{trn.desc}</Tooltip></td>
                  <td style={styles.td}>{trn.amount}</td>
                </tr>);
            })
          }
        </tbody>
      </table>
    );
  }
}