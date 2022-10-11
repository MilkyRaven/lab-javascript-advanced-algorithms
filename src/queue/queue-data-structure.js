class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length <= 9){
      return true
    } else if (this.queueControl.length == 10) {
      return false
    }
  }

  isEmpty() {
    if (!this.queueControl[0]) {
      return true 
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue() === true){
      return this.queueControl.push(item);
    } else {
      throw Error('QUEUE_OVERFLOW');
    }

  }

  dequeue() {
    if (!this.queueControl(0)) {
      throw Error('QUEUE_UNDERFLOW')
    } else {
      return this.queueControl.shift()
    }
    // ... your code goes here
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
