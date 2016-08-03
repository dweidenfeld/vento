import Vent from '../src/Vent';

/**
 * The test class.
 */
export default class TestClass extends Vent {

  /**
   * @constructor
   */
  constructor() {
    super();

    this.onEventFired = false;
    this.onEventData = [];
    this.customFireEventFired = false;
    this.onOutterFired = false;

    this.addEvent('test');
    this.addEvent('custom');
    this.addEvent('outter');
  }

  /**
   * @override
   */
  onTest(some, data) {
    this.onEventData.push(some);
    this.onEventData.push(data);
    this.onEventFired = true;
  }

  /**
   * @override
   */
  onOutter() {
    this.onOutterFired = true;
  }

  /**
   * @override
   */
  fireCustom(...data) {
    this.customFireEventFired = true;
    this.onCustom(data);
  }
}
