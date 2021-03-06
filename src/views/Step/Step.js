import React from 'react';
import { diffLines } from 'diff';
import Paper from './Paper';
import ExampleCode from './ExampleCode';
import refractor from 'refractor/core.js';
import jsx from 'refractor/lang/jsx.js';

refractor.register(jsx);

function sumDiffCounts(xs) {
  return xs.reduce((a, x) => a + x.diff.count, 0);
}

function rTrim(s) {
  return s.replace(/\s+$/, '');
}

function getLines(text) {
  return rTrim(text).split('\n').map(l => l || ' ');
}

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastStepNo: null,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // Only update if the stepNo changes
    return nextProps.stepNo !== this.props.stepNo;
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ lastStepNo: this.props.stepNo });
  };

  render() {
    const { slideshow, stepNo } = this.props;
    const { lastStepNo } = this.state;
    const Step = slideshow.steps[stepNo];
    const StepPrev = lastStepNo ? slideshow.steps[lastStepNo] : null;
    const diffs = diffLines((StepPrev && StepPrev.source) || '', Step.source);

    const items = diffs.reduce((acc, diff, index) => {
      const oldAcc = acc.filter(x => !x.diff.added);
      const newAcc = acc.filter(x => !x.diff.removed);
      const lines = getLines(diff.value);

      return [
        ...acc,
        {
          lines: lines.map(l => refractor.highlight(l, 'jsx')),
          diff,
          key: `${stepNo}-${index}`,
          stepNo,
          initLine: diff.added ? sumDiffCounts(newAcc) : sumDiffCounts(oldAcc),
          compLine: diff.removed ? sumDiffCounts(oldAcc) : sumDiffCounts(newAcc),
        },
      ];
    }, []);
    return (
      <div>
        <h1>
          {Step.title}
        </h1>
        <Paper>
          <ExampleCode stepNo={stepNo} items={items} />
        </Paper>
        {!Step.suppressResult &&
          <div>
            <h2 style={{ marginBottom: '1.5em' }}>Result:</h2>
            <div style={{ transform: 'scale(2)' }}>
              <Paper>
                <div style={{ margin: '20px' }}>
                  <Step />
                </div>
              </Paper>
            </div>
          </div>}
      </div>
    );
  }
}

export default Step;
