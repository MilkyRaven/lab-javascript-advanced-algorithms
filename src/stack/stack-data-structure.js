class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (!this.stackControl[0]) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (!this.stackControl[0]) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if (this.isEmpty() === false) {
      throw Error('STACK_OVERFLOW');
    } else {
    this.stackControl.push(item);
    return this.stackControl;
    }
  }

  pop() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
