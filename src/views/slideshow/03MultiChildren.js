import React from 'react';

const HelloWorld = () =>
  <p id="demo-title">
    <span>Hello</span>
    <span>, </span>
    <span>world!</span>
  </p>;

HelloWorld.source = `const HelloWorld = () => (
  <p id="demo-title">
    <span>Hello</span>
    <span>, </span>
    <span>world!</span>
  </p>
)`;

export default HelloWorld;
