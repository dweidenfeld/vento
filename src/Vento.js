/**
 * Vento is a base class for event classes.
 * It lets you generate event methods automatically and adds them to your class.
 */
export default class Vento {

  /**
   * Adds a new event to the project.
   * @param {string} event the name of the new event
   * @returns {null} null
   */
  addEvent(event) {
    const ucEvent = event[0].toUpperCase() + event.substr(1);
    const fireEvent = `fire${ucEvent}`;
    if (!this[fireEvent]) {
      this[fireEvent] = (...data) => {
        if (this.ventEvents[event] && this.ventEvents[event].length > 0) {
          this.ventEvents[event].forEach((callback) => setTimeout(callback.bind(this, ...data), 0));
        }
      };
    }

    const onEvent = `on${ucEvent}`;
    if (this[onEvent]) {
      this.on(event, this[onEvent].bind(this));
    }
  }

  /**
   * Register new callback for event.
   * @param {string} event the event name
   * @param {Function} callback the callback to be executed
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
