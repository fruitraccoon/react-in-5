import React from 'react';

const Greeting = ({ greetWith }) =>
  <span>
    {greetWith}
  </span>;

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hello" />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Props via Object Destructuring';
HelloWorld.source = `const Greeting = ({ greetWith }) => (
  <span>{greetWith}</span>
)

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hello"/>
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
