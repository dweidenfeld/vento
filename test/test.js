import chai from 'chai'; // eslint-disable-line

import TestClass from './TestClass';

describe('Vento', () => {
  const testClass = new TestClass();

  it('simple test event fired with data', (done) => {
    testClass.fireTest('some', 'data');

    setTimeout(() => {
      chai.assert(testClass.onEventFired);
      chai.assert.deepEqual(['some', 'data'], testClass.onEventData);

      done();
    }, 0);
  });

  it('not overwritten method fired', (done) => {
    testClass.fireCustom();

    setTimeout(() => {
      chai.assert(testClass.customFireEventFired);

      done();
    }, 0);
  });

  it('external event fired', (done) => {
    let fired = false;
    testClass.on('outter', () => {
      fired = true;
    });

    testClass.fireOutter();

    setTimeout(() => {
      chai.assert(fired);
      chai.assert(testClass.onOutterFired);

      done();
    }, 0);
  });
});
