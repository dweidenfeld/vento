# Vent
Vent is a event library that automatically creates event methods.
Vent is used to be the super class of a class. You can also simply extend your class with vent. 
After this you'll be able to either fire the event from the class itself or from external.
You are also able to register to the event internally AND externally. All callbacks will be executed.

I implemented this library because I could not find another library doing this simple stuff. I wrote this code nearly
in every project in my company or in private projects, so I outsourced the code from the projects.

The whole source is written in ES2015, so the examples are also written in ES2015 syntax.

## Install
```
npm install vent
```

## Usage
First you have to import Vent to the file you want to use it.

```javascript
import Vent from 'vent';
```

Then extend your class with Vent.

```javascript
class MyClass extends Vent {}
```

After this you can register new events either in the constructor or somewhere else.

```javascript
this.addEvent('eventName');
``` 

Then you can register to the event. You can create an internal on function or register from external to your event.

```javascript
onEventName() {
  // do something
}

or

myClass.on('eventName', () => {
  // do something
});
```

Thats it... now you can fire your custom created event.

```javascript
myClass.fireEventName();
```

### Full example

```javascript
import Vent from 'vent';

class MyClass extends Vent {
  constructor() {
    this.addEvent('test');
  }

  onTest(data1, data2) {
    console.log('inner notification', data1, data2);
  }
}

const myClass = new MyClass();
myClass.on('test', (data1, data2) => {
  console.log('outter notification', data1, data2);
});
myClass.fireOnTest('first object', 'second object');
```

## Copyright and license
Code and documentation released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE).