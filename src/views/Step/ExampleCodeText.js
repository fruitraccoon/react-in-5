import './ExampleCodeText.css';

import React from 'react';

function buildLine(lineItems, keyPrefix) {
  return lineItems.map((x, i) => {
    const key = `${keyPrefix}-${i}`;
    return x.children
      ? <tspan key={key} className={x.properties.className.reduce((acc, n) => `${acc} ${n}`, '')}>
          {buildLine(x.children, key)}
        </tspan>
      : <tspan key={key}>
          {x.value}
        </tspan>;
  });
}

const ExampleCodeText = ({ lines, lineHeight }) => {
  return (
    <text>
      {lines.map((l, i) =>
        <tspan key={i} x="0" dy={lineHeight} xmlSpace="preserve">
          {buildLine(l, i)}
        </tspan>
      )}
    </text>
  );
};

export default ExampleCodeText;
