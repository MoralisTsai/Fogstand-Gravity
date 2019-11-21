// Reference: https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js

export const compose = (...funcs: any) => funcs.reduce((a: any, b: any) => (...args: any) => a(b(...args)), (arg: any) => arg);
