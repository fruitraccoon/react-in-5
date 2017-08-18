import React from 'react';
import { diffLines } from 'diff';
import { easeExpOut, easeExpInOut } from 'd3-ease';
import NodeGroup from 'resonance/NodeGroup';
import Surface from './Surface';
import Paper from './Paper';

const ExampleCode = ({ view, stepNo, items }) =>
  <div style={{ width: '90vw', height: 'auto' }}>
    <Surface view={[600, 250]}>
      <NodeGroup
        data={items}
        keyAccessor={d => d.key}
        start={(d, i) => ({
          opacity: d.diff.added ? 0 : 1,
          y: `${d.initLine * 1.2}em`,
          transform: `translate(${d.diff.added ? 1000 : 0})`,
        })}
        enter={(d, i) => [
          {
            opacity: d.diff.removed ? [0] : [1],
            y: [`${d.compLine * 1.2}em`],
            timing: { duration: 1000, ease: easeExpInOut },
          },
          {
            transform: ['translate(0)'],
            timing: { delay: 500, duration: 2500, ease: easeExpOut },
          },
        ]}
        update={(d, i) => [
          {
            opacity: 1,
            y: `${d.compLine * 1.2}em`,
            transform: 'translate(0)',
          },
        ]}
        leave={(d, i) => [
          {
            opacity: 0,
          },
        ]}>
        {nodes => {
          return (
            <g>
              {nodes.filter(x => x.data.stepNo === stepNo).map(({ key, data: { diff }, state }) => {
                return (
                  <text key={key} style={{ font: '14px monospace' }} {...state}>
                    {diff.value.split('\n').map(l => l || ' ').map((l, i) => {
                      return (
                        <tspan key={i} x="0" dy="1.2em" xmlSpace="preserve">
                          {l}
                        </tspan>
                      );
                    })}
                  </text>
                );
              })}
            </g>
          );
        }}
      </NodeGroup>
    </Surface>
  </div>;

function sumDiffCounts(xs) {
  return xs.reduce((a, x) => a + x.diff.count, 0);
}

class Step extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    // Only update if the stepNo changes
    return nextProps.stepNo !== this.props.stepNo;
  };

  render() {
    const { slideshow, stepNo } = this.props;
    const Step = slideshow.steps[stepNo];
    let StepPrev = slideshow.steps[slideshow.getPrevStepNo(stepNo)];
    if (StepPrev === Step) StepPrev = null;

    const diffs = diffLines((StepPrev && StepPrev.source) || '', Step.source);

    const items = diffs.reduce((acc, diff, index) => {
      const oldAcc = acc.filter(x => !x.diff.added);
      const newAcc = acc.filter(x => !x.diff.removed);
      return [
        ...acc,
        {
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
          <ExampleCode view={[600, 250]} stepNo={stepNo} items={items} />
        </Paper>
        {!Step.suppressResult &&
          <div>
            <h2>Result:</h2>
            <Paper>
              <div style={{ margin: '20px' }}>
                <Step />
              </div>
            </Paper>
          </div>}
      </div>
    );
  }
}

export default Step;
