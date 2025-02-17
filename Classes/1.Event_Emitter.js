class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);

        return {
            unsubscribe: () => {
                this.events[event] = this.events[event].filter(cb => cb !==callback);
                if (this.events[event].length === 0) {
                    delete this.events[event];
                }
            }
        };
    }

    emit(event, args = []) {
        if (!this.events[event]) {
            return [];
        }
        return this.events[event].map(callback => callback(...args));
    }
}


const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit('onClick')); // []
