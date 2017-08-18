import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHappy: true };
  }

  handleClick = () => {
    this.setState({ isHappy: !this.state.isHappy });
  };

  render() {
    const { greetWith } = this.props;
    const { isHappy } = this.state;
    const greet = greetWith
      ? <i>
          {greetWith}
        </i>
      : 'Hello';
    return (
      <button onClick={this.handleClick}>
        {isHappy ? '😀' : '😕'} {greet}
      </button>
    );
  }
}

const HelloWorld = () =>
  <p id="demo">
    <Greeting greetWith="Hi" />
    <span>, </span>
    world!
  </p>;

HelloWorld.title = 'Stateful Components';
HelloWorld.source = `class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isHappy: true }
  }

  handleClick = () => {
    this.setState({ isHappy: !this.state.isHappy })
  }

  render() {
    const { greetWith } = this.props
    const { isHappy } = this.state
    const greet = greetWith ? <i>{greetWith}</i> : 'Hello'
    return (
      <button onClick={this.handleClick}>
	      {isHappy ? '😀' : '😕'} {greet}
      </button>
    )
  }
}

const HelloWorld = () => (
  <p id="demo">
    <Greeting greetWith="Hi" />
    <span>, </span>
    world!
  </p>
)`;

export default HelloWorld;
