/**
 * throw
 * 1. 如果在调用一个函数的时候抛出了一个异常，但是我们没有对这个异常进行处理，那么这个异常就会被抛出到调用这个函数的上下文中，直到顶层
 * 2. 如果全局代码也没有捕获，那么这个异常就会被抛出到控制台中且程序会终止
 * 3. 异常发生的时候，后面的代码不会执行，即使异常被捕获了
 */
//function foo() {
//    throw new Error('!throw foo error!')
//}
//
//try {
//    console.log('+++')
//    foo() // 异常之后的函数代码不会执行
//    console.log('---') // 不执行
//} catch (e) {
//    console.log(e)
//}
//
//console.log(123) // 执行



function sum(...args) {
    for (const arg of args) {
        if (typeof arg !== 'number') {
            throw new Error('arg is not a number')
        }
    }
    return args.reduce((a, b) => a + b, 0)
}

console.log('start') // 执行

function execCode() {
    console.log('+++') // 执行
    console.log(sum(1, '2', 3))
    console.log('---') // 不执行
}

try {
    execCode()
} catch (e) {
    console.log(e)
}

console.log('end') // 执行
