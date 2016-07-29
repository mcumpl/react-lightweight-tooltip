[![build status](https://secure.travis-ci.org/mcumpl/react-lightweight-tooltip.svg)](http://travis-ci.org/mcumpl/react-lightweight-tooltip)
[![npm version](https://img.shields.io/npm/v/react-lightweight-tooltip.svg)](https://www.npmjs.com/package/react-lightweight-tooltip)
[![bitHound Score](https://www.bithound.io/github/mcumpl/react-lightweight-tooltip/badges/score.svg)](https://www.bithound.io/github/mcumpl/react-lightweight-tooltip)
[![Dependency Status](https://david-dm.org/mcumpl/react-lightweight-tooltip.svg)](https://david-dm.org/mcumpl/react-lightweight-tooltip)
# A lightweight React.js tooltip component

## Demo
[Check it out](https://mcumpl.github.io/react-lightweight-tooltip/)

## Features
* Shows onMouseEnter and hides onMouseLeave on devices with mouse
* Shows onTouchStart and hides “on touch outside” on devices with touch screen
* Uses inline-styles for easy composing of specialized components
* Can have rich content (composed of components)
* Works well on a long lists (eg. financial transactions)
* Is relatively small (~130 lines of ES6 code with inline-styles)
* Has no external dependencies except React and ReactDOM

## TODO
- [ ] Improve tests (let me think...)
- [ ] Improve examples: rewrite to functional components
- [ ] Improve demo: dispay examples and code only, make it responsive
- [ ] Improve docs: tooltip style/dom explanation
- [ ] Write typings

## Basic Usage
```js
import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

export default class Demo extends React.Component {
  render() {
    return <Tooltip content="Yes, the default one">Simple tooltip</Tooltip>;
  }
}
```
## The props

### children
The *children* represent the element(s) the tooltip is wrapped around.

### content
The *content* is the actual content of the tooltip. 
It can be string or array of React Elements. 

Note that each React Element in the array has to have its unique key prop.
```js
<Tooltip
  content={
    [
      'This repo is hosted on ',
      <a href="https://github.com" key="githublink" target="_blank">Github</a>,
    ]
  }>
  Tooltip with a link
</Tooltip>
```

### styles
The *styles* prop is used to override the default styles of the tooltip. 
When passed to the component, the component merges them with its default styles. 

**This is especaially handy when writing specialized components.**
```js
const greenStyle = {
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

export default class GreenTooltip extends React.Component {
  render() {
    return (
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
    );
  }
}
```

## Styling
You can easily override the default styles by passing your own styles to the *styles* prop. 
When your styles get passed, the component merges them with its default styles. 

The default styles are the following:
```js
{
  wrapper: {
    position: 'relative',
    zIndex: '998',
    color: '#555',
    cursor: 'help',
  },
  tooltip: {
    position: 'absolute',
    display: 'inline-block',
    zIndex: '999',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
    background: '#000',
  },
  content: {
    background: '#000',
    padding: '.3em 1em',
    color: '#fff',
    whiteSpace: 'normal',
    overflow: 'auto',
  },
  arrow: {
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
    borderTop: 'solid #000 5px',
    bottom: '-5px',
    height: '0',
    left: '50%',
    marginLeft: '-5px',
    position: 'absolute',
    width: '0',
  },
  gap: {
    bottom: '-20px',
    display: 'block',
    height: '20px',
    left: '0',
    position: 'absolute',
    width: '100%',
  },
}
```

## How to install
```js
npm install react-lightweight-tooltip --save
```

## How to run the demo
```js
npm start
```

## Acknowledgements
Special thanks go to [@no23reason](https://github.com/no23reason) for his help with “on touch outside” handling. This project uses the [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License
*react-lightweight-tooltip* is available under MIT license. See LICENSE for more details.
