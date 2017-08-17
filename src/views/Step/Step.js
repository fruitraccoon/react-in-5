import React from 'react';

const Step = ({ slideshow, stepNo }) => {
  const StepResult = slideshow.steps[stepNo];
  return (
    <div>
      <code style={{ whiteSpace: 'pre-wrap' }}>
        {StepResult.source.split('\n').map((l, i) =>
          <div key={i}>
            {l}
          </div>
        )}
      </code>
      <StepResult />
    </div>
  );
};

export default Step;
