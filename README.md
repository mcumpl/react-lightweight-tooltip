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
* Can contain rich content (composed of components)
* Works well on a long lists (eg. financial transactions)
* Is relatively small (~130 lines of ES6 code incl. default inline-styles)
* Has no external dependencies except React and ReactDOM
* Includes TypeScript typings

## Installation
```js
npm install react-lightweight-tooltip --save
```

## Basic Usage
### Import tooltip component
```js
import {Tooltip} from 'react-lightweight-tooltip';
```

### Use tooltip component
```js
<Tooltip content="Yes, the default one">Simple black tooltip</Tooltip>
```

## Advanced Usage
### The props

#### children
The *children* represent the element(s) the tooltip is wrapped around.

#### content
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

#### styles
The *styles* prop is used to override the default styles of the tooltip. 
When passed to the component, the component merges them with its default styles. 

This is especaially handy when writing specialized components.
```js
const greenRoundedStyle = {
  content: {
    backgroundColor: 'green',
    color: '#000',
  },
  tooltip: {
    backgroundColor: 'green',
    borderRadius: '10px',
  },
  arrow: {
    borderTop: 'solid green 5px',
  },
};

const GreenRoundedTooltip = () => {
  return (
    <Tooltip
      content={
        [
          'This repo is hosted on ',
          <a href="https://github.com" key="githublink" target="_blank">Github</a>,
        ]
      }
      styles={greenRoundedStyle}>
      Green tooltip with rounded corners and a link
    </Tooltip>
  );
}

export default GreenRoundedTooltip;
```

### Custom Styling
You can easily override the default styles by passing your own styles to the *styles* prop. 
When your styles get passed, the component merges them with its default styles. 

The default styles are the following:
```js
{
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    zIndex: '98',
    color: '#555',
    cursor: 'help',
  },
  tooltip: {
    position: 'absolute',
    zIndex: '99',
    background: '#000',
    bottom: '100%',
    left: '50%',
    marginBottom: '10px',
    padding: '5px',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
  },
  content: {
    background: '#000',
    color: '#fff',
    fontSize: '.8em',
    padding: '.3em 1em',
    whiteSpace: 'nowrap',
  },
  arrow: {
    position: 'absolute',
    width: '0',
    height: '0',
    bottom: '-5px',
    left: '50%',
    marginLeft: '-5px',
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
    borderTop: 'solid #000 5px',
  },
  gap: {
    position: 'absolute',
    width: '100%',
    height: '20px',
    bottom: '-20px',
  },
}
```

## TODO
- [ ] Improve demo: dispay examples and code only, make it responsive
- [ ] Improve docs: tooltip style/dom explanation
- [ ] Improve tests (let me think...)
- [ ] Write typings

## Acknowledgements
Special thanks to [@no23reason](https://github.com/no23reason) for his help with the “on touch outside” handling. This project uses the [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License
*react-lightweight-tooltip* is available under MIT license. See LICENSE for more details.
