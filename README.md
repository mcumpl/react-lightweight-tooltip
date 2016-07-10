[![build status](https://secure.travis-ci.org/mcumpl/react-lightweight-tooltip.svg)](http://travis-ci.org/mcumpl/react-lightweight-tooltip) [![bitHound Score](https://www.bithound.io/github/mcumpl/react-lightweight-tooltip/badges/score.svg)](https://www.bithound.io/github/mcumpl/react-lightweight-tooltip) [![Dependency Status](https://david-dm.org/mcumpl/react-lightweight-tooltip.svg)](https://david-dm.org/mcumpl/react-lightweight-tooltip)
# react-lightweight-tooltip - Lightweight React.js tooltip component

## Basic Usage

```js
import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

export default class Demo extends React.Component {
  render() {
    return <Tooltip content={
      [
        'I am a tooltip with a ', 
        <a href="https://github.com" key="ghlink" style={color: '#fff'}>link</a>,
      ]
      }>Hover over me!</Tooltip>
  }
}
```

## Props
The props passed to the component are:
```js

```
## Custom styles
blabla:
```js

```

## Custom content
blabla:
```js

```

## Acknowledgements

This project uses the [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate).

## License

*react-lightweight-tooltip* is available under MIT license. See LICENSE for more details.
