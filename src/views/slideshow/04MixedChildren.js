import React from 'react';

const HelloWorld = () =>
  <p id="demo-title">
    <span>Hello</span>
    <span>, </span>
    world!
  </p>;

HelloWorld.source = `const HelloWorld = () => (
  <p id="demo-title">
    <span>Hello</span>
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
