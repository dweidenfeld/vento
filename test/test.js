import chai from 'chai'; // eslint-disable-line

import TestClass from './TestClass';

describe('Vento', () => {
  it('simple event', (done) => {
    const testClass = new TestClass();
    testClass.fireTest('some', 'data');

    setTimeout(() => {
      chai.assert(testClass.testEventFired);

      done();
    }, 0);
  });

  it('with data', (done) => {
    const testClass = new TestClass();
    testClass.fireTest('some', 'data');

    setTimeout(() => {
      chai.assert.deepEqual(['some', 'data'], testClass.testEventData);

      done();
    }, 0);
  });

  it('event not fired (no listener)', (done) => {
    const testClass = new TestClass();
    testClass.fireCustom();

    setTimeout(() => {
      chai.assert(!testClass.customFireEventFired);

      done();
    }, 0);
  });

  it('external event bound on "on"', (done) => {
    const testClass = new TestClass();
    let fired = false;
    testClass.on('outter', () => {
      fired = true;
    });

    testClass.fireOutter();

    setTimeout(() => {
      chai.assert(fired);

      done();
    }, 0);
  });

  it('external event bound on "onOutter"', (done) => {
    const testClass = new TestClass();
    let fired = false;
    testClass.onOutter(() => {
      fired = true;
    });

    testClass.fireOutter();

    setTimeout(() => {
      chai.assert(fired);

      done();
    }, 0);
  });

  it('multipleEventsFired', (done) => {
    const testClass = new TestClass();
    const fired = [];
    testClass.on('outter', () => {
      fired.push(true);
    });
    testClass.onOutter(() => {
      fired.push(true);
    });
    testClass.on('outter', () => {
      fired.push(true);
    });

    testClass.fireOutter();

    setTimeout(() => {
      chai.assert.equal(3, fired.length);

      done();
    }, 0);
  });
});
