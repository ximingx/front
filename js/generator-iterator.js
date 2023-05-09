/**
 * 生成器代替迭代器
 * @type {string[]}
 */
const names = ['Jack', 'Jill', 'John'];

function* gen() {
    for (let i = 0; i < names.length; i++) {
        yield names[i][1];
    }
}

const myGen = gen();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
//{ value: 'a', done: false }
//{ value: 'i', done: false }
//{ value: 'o', done: false }
//{ value: undefined, done: true }

names[Symbol.iterator] = gen;

for (const name of names) {
    console.log(name);
}

/**
 * 生成器代替迭代器
 * yield* 语法糖，依次便利迭代后面参数中的每个元素
 */

function* gen1(names) {
    yield* names;
}

class Person {
    constructor(name, age, parent) {
        this.name = name;
        this.age = age;
        this.parent = parent;
    }

    *[Symbol.iterator]() {
        yield* Object.entries(this);
    }
}

let p1 = new Person('p1', 18, 'p1');
for (const x of p1) {
    console.log(x);
}
//[ 'name', 'p1' ]
//[ 'age', 18 ]
//[ 'parent', 'p1' ]
