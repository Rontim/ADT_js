// This is a stack data structure
// It uses  the FIFO basis of first in first out
// it has the following functions: push, pop, peek, is_empty
class Stack {
    // First we create a constractor to  initialise the stack object
    // It is initialised by an array
    constructor(item) {
        this.items = []
    }

    // this method adds a new item at the top of the stack
    push(item) {
        this.items.push(item)
        console.log(this.items)
    }

    // removes the top most item from the stack
    pop() {
        return this.items.pop()
    }

    // returns the top most item from the stack but removes nothing
    peek() {
        let top = this.items[this.items.length - 1]
        console.log(999)
        return top
    }

    // checks if the stack is empty and returns a boolean value true if empty and vice-versa
    is_empty() {
        if (this.items.length === 0) {
            return true;
        } else {
            return false
        }
    }
}

let s = new Stack()
s.push(13)
s.push(true)
s.push("Ron")
console.log(s.is_empty())
console.log(s.peek())