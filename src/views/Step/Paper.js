import React from 'react';

const Paper = ({ children }) =>
  <div
    style={{
      boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
      display: 'inline-block',
      boxSizing: 'border-box',
      padding: '1px',
      backgroundColor: 'white',
    }}>
    {children}
  </div>;

export default Paper;
