function Person() {
    this.name = 'person';
}

console.log(Person.prototype); // {constructor: ƒ}

console.log(Person.__proto__); // ƒ () { [native code] }

console.log(Person.__proto__ === Function.prototype); // true

const obj = {
    name: 'obj'
}

console.log(obj.prototype); // undefined

console.log(obj.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(obj.__proto__ === Object.prototype); // true
