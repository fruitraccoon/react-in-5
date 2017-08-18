import React from 'react';

const Greeting = props =>
  <span>
    {props.greetWith}
  </span>;

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hello" />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Component Props';
HelloWorld.source = `const Greeting = (props) => (
  <span>{props.greetWith}</span>
)

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hello"/>
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
