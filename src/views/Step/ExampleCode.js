import React from 'react';
import { easeExpOut, easeExpInOut } from 'd3-ease';
import NodeGroup from 'resonance/NodeGroup';

const ExampleCode = ({ view, stepNo, items }) =>
  <div style={{ width: '90vw' }}>
    <svg viewBox={`-5 -5 505 505`} style={{ maxHeight: '70vh' }}>
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
    </svg>
  </div>;

export default ExampleCode;
