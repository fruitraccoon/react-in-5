import React from 'react';

const HelloWorld = () => <p id="demo-title">Hello, world!</p>;

HelloWorld.title = 'Basic Component';
HelloWorld.source = `const HelloWorld = () => (
  <p id="demo-title">Hello, world!</p>
)`;

export default HelloWorld;
