class Person {
    constructor(name, age, parent) {
        this.name = name
        this.age = age
        this.parent = parent
    }

    getName() {
        return this.name
    }

    [Symbol.iterator]() {
        let index = 0
        let item = Object.entries(this)
        return {
            next: () => {
                if (index < item.length) {
                    return {value: item[index++], done: false}
                } else {
                    return {value: undefined, done: true}
                }
            },
            return: () => {
                console.log('return')
                return {value: undefined, done: true}
            }
        }
    }
}

const person = new Person('person', 18, 'parent')
for (let item of person) {
    console.log(item)
}

let iterator = person[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
//[ 'name', 'person' ]
//[ 'age', 18 ]
//[ 'parent', 'parent' ]
//{ value: [ 'name', 'person' ], done: false }
//{ value: [ 'age', 18 ], done: false }
//{ value: [ 'parent', 'parent' ], done: false }
