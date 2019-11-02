# Merge both [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/merge-both/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/merge-both)

Merge with support for objects and arrays.

[![NPM Badge](https://nodei.co/npm/merge-both.png)](https://npmjs.com/package/merge-both)

## Install

```sh
npm install merge-both
```

## Usage

```js
const mergeBoth = require("merge-both");

mergeBoth(
    {
        a: ["a", "b"],
        b: { b: "c" },
        c: "e"
    },
    {
        a: ["c", "d"],
        b: { b: "f", c: "d" }
    }
);

// Returned object
{
    a: ["a", "b", "c", "d"],
    b: { b: "f", c: "d" },
    c: "e",
}
```

## API

### mergeBoth(obj, ...source)

#### obj

Type: `object`

The main object to merge.

#### source

Type: `object`

The other objects to merge.
