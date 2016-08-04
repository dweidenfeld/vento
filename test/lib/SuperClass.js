import Vento from '../../src/Vento';

/**
 * SuperClass.
 */
class SuperClass {

  /**
   * @constructor
   */
  constructor() {
    this.superClassProperty = 'super';
  }
}


/**
 * SubClass.
 */
export default class SubClass extends SuperClass {

  /**
   * @constructor
   */
  constructor() {
    super();
    this.subClassProperty = 'sub';
    this.testEventFired = false;

    Vento.extend(this);

    this.addEvent('test', this.test);
  }

  /**
   * Test event.
   * @returns {null} null
   */
  test() {
    this.testEventFired = true;
  }
}
