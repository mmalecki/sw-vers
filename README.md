# sw-vers [![Build Status](https://secure.travis-ci.org/mmalecki/sw-vers.png)](http://travis-ci.org/mmalecki/sw-vers)
`sw-vers` is a parser for `sw_vers` command output.

## Installation

    npm install sw_vers

## Usage
```js
var swVers = require('sw-vers');

swVers(function (_, data) {
  console.dir(data);
});
```

Will output something similar to:

```
{ productName: 'Mac OS X',
  productVersion: '10.7.4',
  buildVersion: '11E53' }
```
