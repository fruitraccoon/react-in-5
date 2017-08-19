import React from 'react';

function rTrim(s) {
  return s.replace(/\s+$/, '');
}

function getLines(text) {
  return rTrim(text).split('\n').map(l => l || ' ');
}

const ExampleCodeText = ({ text, lineHeight }) =>
  <text>
    {getLines(text).map((l, i) =>
      <tspan key={i} x="0" dy={lineHeight} xmlSpace="preserve">
        {l}
      </tspan>
    )}
  </text>;

export default ExampleCodeText;
