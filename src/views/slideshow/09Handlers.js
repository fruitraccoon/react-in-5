import React from 'react';

const Greeting = ({ greetWith }) =>
  <button onClick={() => alert('Clicked')}>
    {greetWith}
  </button>;

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hello" />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Handlers';
HelloWorld.source = `const Greeting = ({ greetWith }) => (
  <button onClick={() => alert('Clicked')}>
    {greetWith}
  </button>
)

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hello"/>
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
