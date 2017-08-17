import React from 'react';

const Greeting = () => <span>Hello</span>;

const HelloWorld = () =>
  <p id="demo-title">
    <Greeting />
    <span>, </span>
    world!
  </p>;

HelloWorld.source = `const Greeting = () => (
  <span>Hello</span>
)

const HelloWorld = () => (
  <p id="demo-title">
    <Greeting />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
