import React from 'react';

class Greeting extends React.Component {
  render() {
    const { greetWith, onClick } = this.props;
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
  }
}

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hi" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Class Components';
HelloWorld.source = `class Greeting extends React.Component {
  render() {
    const { greetWith, onClick } = this.props
    const greet = greetWith ? <i>{greetWith}</i> : 'Hello'
    return (
      <button onClick={onClick}>
	      {greet}
      </button>
    )
  }
}

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hi" onClick={() => alert('Clicked')} />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
