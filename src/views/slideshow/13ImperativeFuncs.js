import React from 'react';

const Greeting = ({ greetWith, onClick }) => {
  const greet = greetWith
    ? <i>
        {greetWith}
      </i>
    : 'Hello';
  return (
    <button onClick={onClick}>
      {greet}
    </button>
  );
};

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hi" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Imperative Function Bodies';
HelloWorld.source = `const Greeting = ({ greetWith, onClick }) => {
  const greet = greetWith ? <i>{greetWith}</i> : 'Hello'
  return (
    <button onClick={onClick}>
	    {greet}
    </button>
  )
}

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hi" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
