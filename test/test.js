import chai from 'chai'; // eslint-disable-line

import TestClass from './TestClass';

describe('Vent', () => {
  const testClass = new TestClass();

  it('simple test event fired with data', () => {
    testClass.fireTest('some', 'data');

    chai.assert(testClass.onEventFired);
    chai.assert.deepEqual(['some', 'data'], testClass.onEventData);
  });

  it('not overwritten method fired', () => {
    try {
      testClass.fireCustom();
      chai.fail('exception not occurred');
    } catch (e) {
      // everything ok
    }

    chai.assert(testClass.customFireEventFired);
  });

  it('external event fired', () => {
    let fired = false;
    testClass.on('outter', () => {
      fired = true;
    });

    testClass.fireOutter();

    chai.assert(fired);
    chai.assert(testClass.onOutterFired);
  });
});
