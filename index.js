"use strict"

const _ = require("lodash")

module.exports = (obj, ...sources) => _.mergeWith(obj, ...sources, (objValue, srcValue) => {
    if (_.isArray(objValue)) return objValue.concat(srcValue)
})
