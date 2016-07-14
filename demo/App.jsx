import React from 'react';
import Fork from 'react-ghfork';
import pkgInfo from '../package.json';
import DefaultTooltip from './DefaultTooltip.jsx';
import GreenTooltip from './GreenTooltip.jsx';
import GreyTooltip from './GreyTooltip.jsx';
import TransactionList from './TransactionList.jsx';


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
