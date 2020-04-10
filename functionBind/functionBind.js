/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

var bind = function(func, ...args) {
  return args.length === 1
    ? (...innerargs) => func.call(...args, ...innerargs) : (...innerParams) => func.call(null, ...args.slice(1), ...innerParams);
};

var alice = {
  name: 'alice',
  shout: function() {
    console.log(this.name);
  },
};
var boundShout = bind(alice.shout, alice);
console.log(boundShout()); // alerts 'alice'
boundShout = bind(alice.shout, { name: 'bob' });
console.log(boundShout()); // alerts 'bob'

var func = function(a, b) {
  return a + b;
};
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result);
console.log(result === 'foobar'); // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

Function.prototype.bind = function(...args) {
  return args.length === 1
    ? (...innerArgs) => this.call(...args, ...innerArgs) : (...innerParams) => this.call(null, ...args.slice(1), ...innerParams);
};

var alice = {
  name: 'alice',
  shout: function() {
    console.log(this.name);
  },
};
var boundShout = alice.shout.bind(alice);
console.log(boundShout()); // alerts 'alice'
boundShout = alice.shout.bind({ name: 'bob' });
console.log(boundShout()); // alerts 'bob'

var func = function(a, b) {
  return a + b;
};
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result);
console.log(result === 'foobar'); // true
