import React, { Component } from 'react';
import Step from 'views/Step';
import slideshow from 'views/slideshow';

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
    const stepNo = this.state.stepNo;
    if (e.code === 'ArrowRight') {
      this.setState({ stepNo: slideshow.getNextStepNo(stepNo) });
    }
    if (e.code === 'ArrowLeft') {
      this.setState({ stepNo: slideshow.getPrevStepNo(stepNo) });
    }
  };

  render() {
    const { stepNo } = this.state;
    return (
      <div className="app-component" style={{ width: '80vw' }}>
        <Step slideshow={slideshow} stepNo={stepNo} />
      </div>
    );
  }
}

export default App;
