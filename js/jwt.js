/**
 * jwt是一个字符串
 *
 * jwt的需要解决的问题
 * 1. 没有jwt的情况下
 *      在登录成功之后，服务器会返回客户端用户的一些信息让浏览器去保存，可以使localStorage或者sessionStorage或者是cookie
 *      在客户端请求时，会将身份信息添加到请求中，服务器会验证身份信息
 *      但是用户可以伪造身份信息，也可以和直接篡改
 *      使得服务器无法信任该消息
 */


/**
 * 2. jwt的情况下
 *     在登录成功之后，服务器会返回客户端 身份信息和生成的签名
 *     客户端在请求时，会将身份信息和签名一起发送给服务器
 *     服务器对身份信息再次签名进行验证，如果验证相等通过，说明没有篡改，就可以信任该身份信息
 */


// 这是一个nodejs的加密模块
const crypto = require('crypto')
// 签名是一种算法，需要一个信息和一个密钥，通过算法将信息和密钥进行加密，得到一个签名
function sign(info, key) {
    const hmac = crypto.createHmac('sha256', key)
    hmac.update(info)
    return hmac.digest('base64')
}
// 私钥，只在服务器端保存， 不可以发送给客户端
const _PRIVATE = 'hello world'
// 服务器端生成签名
sign('hello', _PRIVATE) // BFrUGHRqQ8BBNqT1dseV+wZ1+vF3OLsmkxlWZa5yK4g=


/**
 * jwt的包含三个部分 header payload signature
 * header payload 是明文传输的，可以直接获取数据
 * 1. header 由两部分组成 1. 签名算法 2. 指明类型
 *    {
 *      "alg": "HS256",
 *      "typ": "JWT"
 *    }
 *    然后进行base64编码
 *    补充: btoa 可以将字符串进行base64编码
 *    补充: atob 可以将base64编码的字符串进行解码
 * 2. payload 服务器传递给客户端的信息，以及过期时间等
 *    {
 *      "sub": "1234567890",
 *      "name": "John Doe",
 *      "admin": true
 *    }
 *    然后进行base64编码
 * 3. signature 将header与payload用.进行连接后对整体密钥签名后进行base64编码获得
 */

function jwt(info, key) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    }
    const headerBase64 = btoa(JSON.stringify(header))
    const payloadBase64 = btoa(JSON.stringify(info))
    const signature = btoa(sign(headerBase64 + '.' + payloadBase64, key))
    return headerBase64 + '.' + payloadBase64 + '.' + signature
}

jwt({
    name: 'zhangsan',
    age: 18
}, _PRIVATE) // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiemhhbmdzYW4iLCJhZ2UiOjE4fQ==.MTJLU2dBVzVYSWRPVld6MFZrQVFRSFJhVGwwREN0SDlNQlZybXlVeHJPND0=
