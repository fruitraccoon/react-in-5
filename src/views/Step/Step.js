import React from 'react';
import NodeGroup from 'resonance/NodeGroup';

const ExampleCode = ({ items }) =>
  <NodeGroup
    data={items}
    keyAccessor={d => d.key}
    start={(d, i) => ({
      index: i,
      opacity: 0,
    })}
    enter={(d, i) => [
      {
        index: i,
        opacity: [1],
        timing: { duration: 500 },
      },
    ]}
    update={(d, i) => ({
      index: i,
      opacity: 1,
    })}
    leave={(d, i) => [
      {
        index: i,
        opacity: [0],
        timing: { delay: 0, duration: 500 },
      },
    ]}>
    {nodes => {
      const xs = nodes.sort((a, b) => a.state.index - b.state.index);
      return (
        <code style={{ whiteSpace: 'pre-wrap' }}>
          {xs.map(({ key, data: d, state: { opacity } }) => {
            return (
              <div key={key} style={{ opacity }}>
                {d.line}
              </div>
            );
          })}
        </code>
      );
    }}
  </NodeGroup>;

const Step = ({ slideshow, stepNo }) => {
  const StepResult = slideshow.steps[stepNo];
  const items = StepResult.source.split('\n').map((l, i) => ({ key: l, line: l }));

  const keys = [];
  for (let x of items) {
    while (keys.indexOf(x.key) >= 0) {
      x.key = x.key + '_';
    }
    keys.push(x.key);
  }

  return (
    <div>
      <ExampleCode items={items} />
      <StepResult />
    </div>
  );
};

export default Step;
