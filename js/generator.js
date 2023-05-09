/**
 * 生成器函数
 *  1. *表示这是一个生成器函数
 *  2. yield表示暂停执行, 每次遇到yield会暂停执行后面的操作
 *  3. 生成器函数返回的是一个迭代器，可以调用next()，每次调用 next()，会从上一次暂停的地方继续执行
 * @returns {Generator<*, void, *>}
 */
function* f1() {
    console.log('1')
    yield
    console.log('2')
    yield
    console.log('3')
}

const gen1 = f1()
gen1.next() // 1
gen1.next() // 2
gen1.next() // 3

/**
 * 生成器函数的传递参数返回值
 * 1. yield后面的值作为next()的value的返回值
 * 2. 生成器函数最后一次next()返回值（在所有的yield执行完后的最后一次）或者遇到return的时候，返回done: true，否则返回done: false
 * @returns {Generator<*, void, *>}
 */
function* f2() {
    console.log('1')
    yield 1
    console.log('2')
    yield 2
    console.log('3')
    return 3
}

const gen2 = f2()
console.log(gen2.next()) // { value: 1, done: false }
console.log(gen2.next()) // { value: 2, done: false }
console.log(gen2.next()) // { value: 3, done: true }

/**
 * 生成器函数中间return
 * 1. return后面的值作为next()的value的返回值
 * 2. return后面的next()返回值都是{ value: undefined, done: true }
 * @returns {Generator<number, number, *>}
 */
function* f3() {
    console.log('1')
    yield 1
    console.log('2')
    return 2
    console.log('3')
    yield 3
    console.log('4')
}

const gen3 = f3()
console.log(gen3.next())
console.log(gen3.next())
console.log(gen3.next())
//1
//{ value: 1, done: false }
//2
//{ value: 2, done: true }
//{ value: undefined, done: true }

/**
 * 生成器函数传递参数
 */
function* f4(p1) {
    console.log(p1)
    const p2 = yield
    console.log(p2)
    const p3 = yield
    console.log(p3)
    const p4 = yield
    console.log(p3)
}

const gen4 = f4(1)
console.log(gen4.next())
console.log(gen4.next(2))
console.log(gen4.next(3))
console.log(gen4.next(4))
//1
//{ value: undefined, done: false }
//2
//{ value: undefined, done: false }
//3
//{ value: undefined, done: false }
//3
//{ value: undefined, done: true }

/**
 * 生成器函数提前结束
 * 1. 生成器函数提前结束，返回的迭代器的return()返回值都是{ value: 传入的参数, done: true }
 * 2. 生成器函数提前结束，返回的迭代器的throw()返回值都是{ value: undefined, done: true }
 */

function* f5() {
    console.log('1')
    yield 1
    console.log('2') // 这里不会执行
    yield 2
    console.log('3')
    yield 3 // 这里不会执行
    console.log('4')
}

const gen5 = f5()
console.log(gen5.next())
console.log(gen5.return(2))
console.log(gen5.next())
//console.log(gen5.throw(new Error('error'))) 需要捕获异常
//1
//{ value: 1, done: false }
//{ value: 2, done: true }
//{ value: undefined, done: true }
