import Step01 from './01BasicComponent';
import Step02 from './02WithoutJsx';
import Step03 from './03MultiChildren';
import Step04 from './04MixedChildren';
import Step05 from './05ChildComponent';

const steps = [Step01, Step02, Step03, Step04, Step05];

export default {
  steps,
  getNextStepNo: stepNo => {
    return stepNo < steps.length - 1 ? stepNo + 1 : stepNo;
  },
  getPrevStepNo: stepNo => {
    return stepNo > 0 ? stepNo - 1 : stepNo;
  },
};
