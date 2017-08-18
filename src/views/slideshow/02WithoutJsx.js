import React from 'react';

const HelloWorld = () => React.createElement('p', { id: 'demo-title' }, ['Hello, world!']);

HelloWorld.title = 'Without JSX';
HelloWorld.source = `const HelloWorld = () => (
  React.createElement('p', { id: 'demo-title' }, [ 'Hello, world!' ])
)`;

export default HelloWorld;
