/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.storage = [];
    this.amount = 0;
    this.minValues = [Infinity];

  // add an item to the top of the stack
    this.push = function(value) {
      this.storage.push(value)
      this.amount += 1;
      if (value <=this.minValues[this.minValues.length-1]){
        this.minValues.push(value);
      }
    };

    // remove an item from the top of the stack
    this.pop = function() {
        const toReturn = this.storage[this.storage.length-1]
        // console.log('minns', this.minValues[this.minValues.length -1])
        if (toReturn === this.minValues[this.minValues.length-1]){
          this.minValues = this.minValues.slice(0, this.minValues.length-1);
        }
        this.storage = this.storage.slice(0, this.storage.length -1 )
        this.amount -= 1;
        return toReturn;
    };

    // return the number of items in the stack
    this.size = function() {
      return this.amount;
    };
    
    // return the minimum value in the stack
    this.min = function() {
      return this.minValues[this.minValues.length-1];
  };
}

var stack = new Stack()

stack.push(2)
console.log(stack)