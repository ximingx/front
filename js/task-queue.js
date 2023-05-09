/**
 * 微任务 宏任务
 * 1. 微任务：Promise.then MutationObserver process.nextTick queueMicrotask()
 * 2. 宏任务：setTimeout setInterval setImmediate I/O UI渲染 ajax
 * 3. 优先级：微任务 > 宏任务
 * 4. 每次的宏任务执行之前，都会先执行完所有的微任务 !important
 * 5. await后面的代码会暂时中止，等待Promise状态改变后，再继续执行，所以await后面的代码会被放到微任务队列中 !important
 */

// 1.任务队列面试题
 console.log('script1 start');

 setTimeout(function() {
     console.log('setTimeout');
 }, 0);

 Promise.resolve().then(function() {
     console.log('promise1');
 }).then(function() {
     console.log('promise2');
 });

// 1. 答案
// console.log('script1 end');
// script start
// script end
// promise1
// promise2
// setTimeout

// 2.任务队列面试题
console.log('script2 start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script2 end');

// 2. 答案
// script2 start
// script2 end
// promise1
// promise2
// setTimeout

// 3.任务队列面试题
console.log('script3 start');

function requestData(url) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log('setTimeout requestData');
            resolve('success');
        }, 1000);
    });
}

function getData() {
    console.log('getData');
    requestData('http://www.baidu.com').then((res) => {
        console.log(res);
    })
    console.log('getData end');
}

getData();

console.log('script3 end');

// 3. 答案
// script3 start
// getData
// getData end
// script3 end
// setTimeout requestData
// success

// 4.任务队列面试题
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script4 start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
})

console.log('script4 end');

// 4. 答案
// script4 start
// async1 start
// async2
// promise1
// script4 end
// async1 end
// promise2
// setTimeout
