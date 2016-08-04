import chai from 'chai'; // eslint-disable-line

import SubClass from './lib/SuperClass';

describe('Vento super class tests', () => {
  it('bound to extended class', (done) => {
    const testClass = new SubClass();
    testClass.fireTest();

    setTimeout(() => {
      chai.assert.equal('super', testClass.superClassProperty);
      chai.assert.equal('sub', testClass.subClassProperty);
      chai.assert(testClass.testEventFired);

      done();
    }, 0);
  });
});
