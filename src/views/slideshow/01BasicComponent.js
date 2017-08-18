import React from 'react';

const HelloWorld = () => <p id="demo-title">Hello, world!</p>;

HelloWorld.title = 'A Basic Component';
HelloWorld.source = `const HelloWorld = () => (
  <p id="demo">Hello, world!</p>
)`;

export default HelloWorld;
