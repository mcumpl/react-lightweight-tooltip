# react-lightweight-tooltip - Lightweight React.js tooltip component

## About
I recently needed a lightweight tooltip component that:

* Uses inline-styles (for easy composing of specialized components)
* Utilizes React.js Event System (does tooltip need more than onMouseEnter and onMouseLeave?)
* Is small and ideally has no external dependencies
* Is applicable on a long lists (eg. transactions)
* Its content can be composed of elements (links, images etc.)
* Works well on mobile devices by default

And I couldn't find any, So I decided to write one.

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

## Props
The props passed to the component are:
```js

```
## Custom content and styling 
blabla:
```js
import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

const wrapperStyle = {
  wrapper: {
    background: '#ececec',
    color: '#555',
    margin: '30px 10px 10px 10px',
    padding: '15px 20px',
    textAlign: 'center',
    width: '195px',
    display: 'inline-block',
  },
};

const greenStyle = {
  wrapper: wrapperStyle.wrapper,
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

const greyStyle = {
  wrapper: wrapperStyle.wrapper,
  content: {
    backgroundColor: 'grey',
    color: '#000',

  },
  tooltip: {
    backgroundColor: 'grey',
  },
  arrow: {
    borderTop: 'solid grey 5px',
  },
};

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <Tooltip content="Yes, the default one" styles={wrapperStyle}>Simple tooltip</Tooltip>

        <Tooltip
          content={
            [
              'This repo is hosted on ',
              <a href="https://github.com" target="_blank">Github</a>,
            ]
          }
          styles={greenStyle}>
          Tooltip with a link
        </Tooltip>

        <Tooltip
          content={
            [
              <img src="https://avatars0.githubusercontent.com/u/9491005" style={{ width: '100px', borderRadius: '50%' }} />,
              <div style={{ textAlign: 'center', padding: '10px 20px' }}>
                Hi there, I am <a href="https://github.com/mcumpl" target="_blank">Michal</a> and I love corrida de toros! <em>Not...</em>
              </div>,
            ]
          }
          styles={greyStyle}>
          Tooltip with a rich content
        </Tooltip>
      </div>
    );
  }
}
```

## Acknowledgements

This project uses the [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License

*react-lightweight-tooltip* is available under MIT license. See LICENSE for more details.
