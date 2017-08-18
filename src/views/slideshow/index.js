import Step00 from './00TitlePage.js';
import Step01 from './01BasicComponent';
import Step02 from './02WithoutJsx';
import Step03 from './03MultiChildren';
import Step04 from './04MixedChildren';
import Step05 from './05ChildComponent';

import Step06 from './06JsExpressions';
import Step07 from './07CustomProps';
import Step08 from './08PropsViaDest';
import Step09 from './09Handlers';
import Step10 from './10HandlersAsProps';
import Step11 from './11ExtendingExpressions';
import Step12 from './12ExtendingExpressionsMore';
import Step13 from './13ImperativeFuncs';
import Step14 from './14ClassComponents';
import Step15 from './15StatefulComponents';

const steps = [
  Step00,
  Step01,
  Step02,
  Step01,
  Step03,
  Step04,
  Step05,
  Step06,
  Step07,
  Step08,
  Step09,
  Step10,
  Step11,
  Step12,
  Step13,
  Step14,
  Step15,
];

export default {
  steps,
  getNextStepNo: stepNo => {
    return stepNo < steps.length - 1 ? stepNo + 1 : stepNo;
  },
  getPrevStepNo: stepNo => {
    return stepNo > 0 ? stepNo - 1 : stepNo;
  },
};
