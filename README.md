# launchcontrol-message-parser
[![Build Status](http://img.shields.io/travis/mohayonao/launchcontrol-message-parser.svg?style=flat-square)](https://travis-ci.org/mohayonao/launchcontrol-message-parser)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/launchcontrol-message-parser.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/launchcontrol-message-parser)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

## Installation

```sh
npm install @mohayonao/launchcontrol-message-parser
```

## Example

```js
const parser = require("@mohayonao/launchcontrol-message-parser");

launchControl.onmidimessage = (e) => {
  const items = parser.parse(e.data);
  // → { col: 0, row: 0, val: 100, ch: 0 }

  if (items.col === 0 && items.row === 0) {
    console.log(`knob1-0: ${ items.val }`);
  }
};
```

## Data Matrix

![data-matrix](data-matrix.png)

## License

MIT
