# A lightweight but powerful React.js tooltip component

## TODO
- [x] Test / fix mobile styles
- [x] Fix styles: tooltip width based on content not wrapper
- [ ] Improve tests
- [x] Write specialized component examples
- [x] Improve demo: list of transactions (10, 100, 500, 1000, 2000, 3000, 5000 trns)
- [ ] Improve demo: dispay examples and code only
- [ ] Improve docs: tooltip style/dom explanation
- [ ] Npm + travis + bithound + greenkeeper etc
- [ ] Consider adding click/hover (any event?) switch
- [ ] Consider adding hidearrow prop
- [ ] Write typings

## Demo
[Check it out](https://mcumpl.github.io/react-lightweight-tooltip/)

## Motivation
I recently needed a lightweight React.js tooltip component that:

* Is small (~100 lines) and ideally has no external dependencies
* Won't break with the next version of React
* Uses inline-styles (for easy composing of specialized components)
* Correctly uses React Event System
* Is applicable on a long lists (eg. financial transactions)
* Its content can be composed of elements (links, images etc.)
* Works well on mobile devices by default (is responsive)

And I couldn't find any, so I decided to write one.

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
npm install react-lightweight-tooltip
```

## How to run the demo
```js
npm start
```

## Acknowledgements
This project uses the [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License
*react-lightweight-tooltip* is available under MIT license. See LICENSE for more details.
