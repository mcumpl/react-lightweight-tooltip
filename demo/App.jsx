import React from 'react';
import Fork from 'react-ghfork';
import pkgInfo from '../package.json';
import DefaultTooltip from './Demo/DefaultTooltip.jsx';
import GreenTooltip from './Demo/GreenTooltip.jsx';
import GreyTooltip from './Demo/GreyTooltip.jsx';
import TransactionList from './Demo/TransactionList.jsx';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Fork className="right" project={pkgInfo.user + '/' + pkgInfo.name} />
        <DefaultTooltip />
        <GreenTooltip />
        <GreyTooltip />
        <TransactionList />
      </div>
    );
  }
}
