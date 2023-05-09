/**
 * vue3的proxy效率比Object.defineProperty效率高的原因
 */


/**
 * 1. es5
 *  es5时对象属性只能通过Object.defineProperty的get和set方法进行监听
 *  需要深度的遍历每个属性进行监听，效率低
 *  一旦完成了监听，就不能再对对象进行添加或删除属性
 * 2. es6
 *  es6时可以通过proxy进行监听，proxy可以监听对象的添加和删除属性
 */
const obj = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: 2
    }
}

/**
 * 判断是否是对象
 * @param obj {Object}
 * @returns {boolean}
 * @private
 */
function _isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

// es5
//function observe5(obj) {
//    for (const key in obj) {
//        let v = obj[key]
//        if (_isObject(v)) {
//            observe5(v)
//        }
//        Object.defineProperty(obj, key, {
//            get() {
//                console.log('get', v)
//                return v
//            },
//            set(val) {
//                console.log('set', val)
//                if (val !== v) {
//                    v = val
//                }
//            }
//        })
//    }
//}
//
//observe5(obj)
// es5不可以监听添加删除属性
// obj.a = 2

// es6
function observe6(obj) {
    return new Proxy(obj, {
        get(target, p) {
            console.log('get', target[p])
            if (_isObject(target[p])) {
                target[p] = observe6(target[p])
            }
            return target[p]
        },
        set(target, p, value) {
            console.log('set', value)
            if (value !== target[p]) {
                target[p] = value
            }
        }
    })
}

const proxy2 = observe6(obj)

proxy2.c.d = 4
