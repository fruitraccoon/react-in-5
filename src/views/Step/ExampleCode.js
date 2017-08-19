import './ExampleCode.css';

import React from 'react';
import { easeSinOut, easeExpInOut } from 'd3-ease';
import NodeGroup from 'resonance/NodeGroup';
import ExampleCodeText from './ExampleCodeText';

const lineHeight = 17;

const ExampleCode = ({ stepNo, items }) =>
  <div style={{ width: '90vw' }}>
    <svg viewBox={`-5 -5 505 505`} style={{ maxHeight: '60vh' }}>
      <NodeGroup
        data={items}
        keyAccessor={d => d.key}
        start={(d, i) => ({
          opacity: d.diff.added ? 0 : 1,
          translateX: d.diff.added ? 1000 : 0,
          translateY: d.initLine * lineHeight,
          rectScale: 50,
          rectOpacity: 0,
        })}
        enter={(d, i) => [
          {
            opacity: d.diff.removed ? [0] : [1],
            translateY: [d.compLine * lineHeight],
            timing: { duration: 1000, ease: easeExpInOut },
          },
          {
            translateX: [0],
            timing: { delay: 500, duration: 2000, ease: easeSinOut },
            rectScale: [1],
          },
          {
            timing: { delay: 3000, duration: 500 },
            rectOpacity: [1],
          },
        ]}
        update={(d, i) => [
          {
            opacity: 1,
            translateY: d.compLine * lineHeight,
            translateX: 0,
            rectScale: 1,
            rectOpacity: 1,
          },
        ]}
        leave={(d, i) => [
          {
            opacity: 0,
            rectOpacity: 0,
          },
        ]}>
        {nodes => {
          return (
            <g style={{ font: '14px monospace' }}>
              {nodes.filter(x => x.data.stepNo === stepNo).map(node => {
                const { key, data: { diff, lines }, state } = node;
                return (
                  <g key={key} className={diff.added ? 'zoomable' : ''}>
                    {node.bBox &&
                      <rect
                        transform={`translate(${node.bBox.x}, ${state.translateY + node.bBox.y})`}
                        opacity={state.rectOpacity}
                        stroke="red"
                        strokeWidth="1px"
                        fill="white"
                        width={node.bBox.width}
                        height={node.bBox.height}
                      />}
                    <g
                      opacity={state.opacity}
                      transform={`translate(${state.translateX}, ${state.translateY})`}
                      ref={e => (node.bBox = e && diff.added && e.getBBox())}>
                      <ExampleCodeText lines={lines} lineHeight={lineHeight} />
                    </g>
                  </g>
                );
              })}
            </g>
          );
        }}
      </NodeGroup>
    </svg>
  </div>;

export default ExampleCode;
