import Vento from '../src/Vento';

/**
 * The test class.
 */
export default class TestClass extends Vento {

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
  fireCustom() {
    this.customFireEventFired = true;
  }
}
