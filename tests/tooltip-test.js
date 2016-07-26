import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Tooltip} from '../src/index';

export default class DefaultTooltip extends React.Component {
  render() {
    return (
      <div>
        <Tooltip content="Yes, the default one" ref="tooltip">Simple black tooltip</Tooltip>
      </div>
    );
  }
}

describe('Tooltip', () => {
  it('should export a function', () => {
    expect(Tooltip).to.exist;
    expect(Tooltip).to.be.instanceof(Function);
  });
/*
  it('should change state on the location', () => {



var node = this.refs.button;
ReactTestUtils.Simulate.click(node);


    const mockGeolocationProvider = {
      getCurrentPosition(onSuccess) {
        return onSuccess({
          coords: {
            latitude: 50,
            longitude: 20,
          },
        })
      },
    };

    const Wrapped = geolocated({
      geolocationProvider: mockGeolocationProvider,
    })(SimpleComponent);

    const rendered = TestUtils.renderIntoDocument(<Wrapped />);
    const renderedNode = ReactDOM.findDOMNode(rendered);

    expect(renderedNode.textContent).to.equal('50, 20');
  });

  it('should throw on invalid geolocation provider', () => {
    const Wrapped = geolocated({
      geolocationProvider: {},
    })(SimpleComponent);

    expect(() => TestUtils.renderIntoDocument(<Wrapped />)).to.throw();
  });

  */
});