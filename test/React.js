'use strict';
var React = require('react');
var ReactDOMServer = require('react-dom/server');

function list(props) {
  var children = props.children;
  return React.createElement('ul', null, children);
}

function childrenIsArray(props) {
  var children = props.children;
  return React.createElement('div', { data: JSON.stringify(Array.isArray(children)) }, children);
}

exports.listComponent = list;
exports.childrenisArrayFn = childrenIsArray;
