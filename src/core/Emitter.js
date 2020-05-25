export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // dispatch, fire, trigger
  // Уведомляем слушателей, если они есть
  // eventName is string as 'formula:done'
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      false;
    }
    this.listeners[event].forEach(listener => listener(...args));
    return true;
  }

  // on, listen
  // Подписываемся на уведомления
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn);
    }
  }
}

// Example
// const emitter = new Emitter();
// const unsubscribe =
//     emitter.subscribe('anatoliy', data => console.log('Sub', data));
// emitter.emit('anatoliy', 40);
// unsubscribe();
// emitter.emit('anatoliy', 42);
