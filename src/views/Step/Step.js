import React from 'react';
import { diffLines } from 'diff';
import NodeGroup from 'resonance/NodeGroup';
import Surface from './Surface';

const ExampleCode = ({ stepNo, items }) =>
  <Surface view={[600, 250]}>
    <NodeGroup
      data={items}
      keyAccessor={d => d.key}
      start={(d, i) => ({
        textAttributes: {
          y: `${d.initLine * 1.2}em`,
          opacity: d.diff.added ? 0 : 1,
        },
      })}
      enter={(d, i) => [
        {
          textAttributes: {
            y: [`${d.compLine * 1.2}em`],
            opacity: d.diff.removed ? [0] : [1],
          },
          timing: { duration: 1000 },
        },
      ]}
      update={(d, i) => [
        {
          textAttributes: {
            opacity: 1,
          },
        },
      ]}
      leave={(d, i) => [
        {
          textAttributes: {
            opacity: 0,
          },
        },
      ]}>
      {nodes => {
        return (
          <g>
            {nodes
              .filter(x => x.data.stepNo === stepNo)
              .map(({ key, data: { diff }, state: { textAttributes } }) => {
                return (
                  <text key={key} style={{ font: '14px monospace' }} {...textAttributes}>
                    {diff.value.split('\n').filter(l => !!l).map((l, i) => {
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
  </Surface>;

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
        <ExampleCode stepNo={stepNo} items={items} />
        <Step />
      </div>
    );
  }
}

export default Step;
