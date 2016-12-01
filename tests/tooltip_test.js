import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import {Tooltip} from '../src/index';

export default class DefaultTooltip extends React.Component {
  render() {
    return <Tooltip content="Yes, the default one" ref="tooltip">Simple black tooltip</Tooltip>;
  }
}

describe('Tooltip', () => {
  it('should export a function', () => {
    expect(Tooltip).to.exist;
    expect(Tooltip).to.be.instanceof(Function);
  });

//  it('default state should be equal {visible:false}', () => {
//    const rendered = TestUtils.renderIntoDocument(<DefaultTooltip />);
//    const node = rendered.refs.tooltip;
//    expect(node.state.visible).to.equal(false);
//  });
});