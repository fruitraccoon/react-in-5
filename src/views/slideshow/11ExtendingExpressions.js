import React from 'react';

const Greeting = ({ greetWith, onClick }) =>
  <button onClick={onClick}>
    {greetWith || 'Hello'}
  </button>;

const HelloWorld = () =>
  <p id="demo">
    <Greeting onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Extending JS Expressions';
HelloWorld.source = `const Greeting = ({ greetWith, onClick }) => (
  <button onClick={onClick}>
    {greetWith || 'Hello'}
  </button>
)

const HelloWorld = () => (
  <p id="demo">
    <Greeting onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
