import React from 'react';

const Greeting = ({ greetWith, onClick }) =>
  <button onClick={onClick}>
    {greetWith}
  </button>;

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hello" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Handlers as Props';
HelloWorld.source = `const Greeting = ({ greetWith, onClick }) => (
  <button onClick={onClick}>
    {greetWith}
  </button>
)

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hello" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
