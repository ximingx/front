// 循环引用
//let a = {
//    name: 'a',
//    child: {
//        name: 'a-child'
//    }
//}
//a.child.parent = a

//JSON.parse(JSON.stringify(a)) // Uncaught TypeError: Converting circular structure to JSON

// 深拷贝解决循环引用
function deepCopy(obj) {

    const cache = new WeakMap();

    function _deepCopy(obj) {
        if (obj === null) return obj;
        if (obj instanceof Date) return new Date(obj);
        if (obj instanceof RegExp) return new RegExp(obj);

        if (typeof obj !== 'object') return obj;

        if (cache.get(obj)) return cache.get(obj);

        const cloneObj = new obj.constructor();
        cache.set(obj, cloneObj);

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloneObj[key] = _deepCopy(obj[key]);
            }
        }

        return cloneObj;
    }
    return _deepCopy(obj);
}

//console.log(deepCopy(a))

module.exports = {
    deepCopy
}
