import React from 'react';
import {Tooltip} from '../../src/index';


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

export default class TransactionList extends React.Component {
  render() {
    return (
      <div>

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