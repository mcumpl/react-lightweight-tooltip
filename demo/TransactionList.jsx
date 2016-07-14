import React from 'react';
import {Tooltip} from '../src/index';
import ItemCountButton from './ItemCountButton.jsx';

const styles = {
  td: {
    padding: '15px',
    margin: '15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
};

const trnTemplate = [
  {
    description: 'Coffeeshop Siberia Amsterdam',
    type: 'POS transaction',
  },
  {
    description: 'Rabobank Amsterdam',
    type: 'Deposit transaction',

  },
  {
    description: 'ABN AMRO Amsterdam',
    type: 'Withdrawal transaction',

  },
  {
    description: 'MELKWEG Amsterdam',
    type: 'POS transaction',

  },
  {
    description: 'Heineken Brouwerij',
    type: 'POS transaction',
  },
];

export default class TransactionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }

  setCount = (count) => {
    this.setState(Object.assign({}, this.state, {
      count: count,
    }));
  }

  getTransactions = () => {
    let trns = [];
    for (let i = 0; i < this.state.count; i++) {
      let rn = Math.floor(Math.random() * trnTemplate.length);
      trns[i] = {
        id: i + 1,
        description: trnTemplate[rn].description,
        amount: '$' + Math.floor(Math.random() * 100),
        type: trnTemplate[rn].type,
      };
    }
    return trns;
  }

  render() {

    const transactions = this.getTransactions();

    return (
      <div>
        <h3>Select number of transaction to render</h3>
        <ItemCountButton count={5} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={10} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={50} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={100} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={500} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={1000} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={2000} onClick={this.setCount} selectedCount={this.state.count} />
        <ItemCountButton count={3000} onClick={this.setCount} selectedCount={this.state.count} />
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
              transactions.map((trn) => {
                return (
                  <tr key={trn.id}>
                    <td style={styles.td}>{trn.id}</td>
                    <td style={styles.td}><Tooltip content={trn.type}>{trn.description}</Tooltip></td>
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