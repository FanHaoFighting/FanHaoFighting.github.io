

class EventEmitter {
  constructor() {
    this.eventListeners = {

    }
  }


  addEventListener(type, handler) {

  }

  removeEventListener(type, handler) {
    let listeners = this.eventListeners[type]
    this.eventListeners[type] = listeners.filter(it => )
  }

  emit(type, ...args) {
    let listeners = this.eventListeners[type]
    if (listeners) {
      for (let i =0 ; i < listeners.length; i++) {
        let handler = listeners[i]
        handler.call(this, ...args)
      }
    }
  }
}
