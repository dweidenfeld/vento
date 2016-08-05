/**
 * Vento is a base class for event classes.
 * It lets you generate event methods automatically and adds them to your class.
 */
export default class Vento {

  /**
   * Extends an already existing class.
   * @param {Class} clazz the class to extend
   * @returns {null} null
   * @static
   */
  static extend(clazz) {
    const instance = new Vento();
    clazz.addEvent = instance.addEvent; // eslint-disable-line
    clazz.on = instance.on; // eslint-disable-line
  }

  /**
   * Adds a new event to the project.
   * @param {string} event the name of the new event
   * @param {function} callback the internal callback for the event
   * @returns {null} null
   */
  addEvent(event, callback) {
    const ucEvent = event[0].toUpperCase() + event.substr(1);
    this[`fire${ucEvent}`] = (...data) => {
      if (this.ventEvents[event] && this.ventEvents[event].length > 0) {
        this.ventEvents[event].forEach((cb) => setTimeout(() => {
          cb(...data);
        }, 0));
      }
    };
    this[`on${ucEvent}`] = this.on.bind(this, event);

    if (typeof callback === 'function') {
      this.on(event, callback.bind(this));
    }
  }

  /**
   * Register new callback for event.
   * @param {string} event the event name
   * @param {function} callback the callback to be executed
   * @returns {null} null
   */
  on(event, callback) {
    if (!event || !callback) {
      return;
    }
    if (!this.ventEvents) {
      this.ventEvents = {};
    }
    if (!this.ventEvents[event]) {
      this.ventEvents[event] = [];
    }
    this.ventEvents[event].push(callback);
  }
}
