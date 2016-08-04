import Vento from '../../src/Vento';

/**
 * The test class.
 */
export default class TestClass extends Vento {

  /**
   * @constructor
   */
  constructor() {
    super();

    // event check variables
    this.testEventFired = false;
    this.customEventFired = false;
    this.outterEventFired = false;
    this.testEventData = [];

    // register events
    this.addEvent('test', this.test);
    this.addEvent('custom');
    this.addEvent('outter', this.outter);
  }

  /**
   * Called if the test event is fired.
   * @param {string} some data
   * @param {string} data data
   * @returns {null} null
   */
  test(some, data) {
    this.testEventFired = true;
    this.testEventData.push(some);
    this.testEventData.push(data);
  }

  /**
   * Called if the outter event is fired.
   * @returns {null} null
   */
  outter() {
    this.outterEventFired = true;
  }
}
