import './App.css';

import React, { Component } from 'react';
import Step from 'views/Step';
import slideshow from 'views/slideshow';

const NavArrow = ({ next }) =>
  <div>
    <svg viewBox="-5 0 70 100" transform={next ? 'rotate(180)' : ''}>
      <path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" />
    </svg>
  </div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNo: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown');
  }

  handleKeyDown = e => {
    if (e.code === 'ArrowRight') {
      this.handleNext();
    }
    if (e.code === 'ArrowLeft') {
      this.handlePrev();
    }
  };

  handleNext = () => {
    this.setState({ stepNo: slideshow.getNextStepNo(this.state.stepNo) });
  };

  handlePrev = () => {
    this.setState({ stepNo: slideshow.getPrevStepNo(this.state.stepNo) });
  };

  render() {
    const { stepNo } = this.state;
    return (
      <div
        className="app-component"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(lightgrey, whitesmoke)',
          textAlign: 'center',
        }}>
        <div style={{ padding: '0 5vw' }}>
          <Step slideshow={slideshow} stepNo={stepNo} />
        </div>
        <button
          onClick={this.handlePrev}
          className={`nav-button ${slideshow.hasPrevStep(stepNo) ? 'nav-button-visible' : ''}`}
          style={{
            left: 0,
            bottom: 0,
          }}>
          <NavArrow />
        </button>
        <button
          onClick={this.handleNext}
          className={`nav-button ${slideshow.hasNextStep(stepNo) ? 'nav-button-visible' : ''}`}
          style={{
            right: 0,
            bottom: 0,
          }}>
          <NavArrow next />
        </button>
      </div>
    );
  }
}

export default App;
