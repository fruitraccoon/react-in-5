import React from 'react';

const Greeting = ({ greetWith, onClick }) =>
  <button onClick={onClick}>
    {greetWith
      ? <i>
          {greetWith}
        </i>
      : 'Hello'}
  </button>;

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hi" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Extending JS Expressions Further';
HelloWorld.source = `const Greeting = ({ greetWith, onClick }) => (
  <button onClick={onClick}>
    {greetWith ? <i>{greetWith}</i> : 'Hello'}
  </button>
)

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hi" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
