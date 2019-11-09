// Reference: https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js

export const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), (arg) => arg);
