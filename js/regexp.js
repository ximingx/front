/**
 * 正则表达式 regexp
 * 1. 正则表达式是一种用来匹配字符串的强有力的武器
 * 2. 它的设计思想是用一种描述性的语言来给字符串定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的
 * 3. 正则表达式的匹配模式是由字符串组成的
 * 4. 正则表达式的匹配模式默认是区分大小写的
 * 5. 正则表达式的匹配模式默认是贪婪匹配，即输出匹配最长的子串
 * 6. 正则表达式的匹配模式默认是单行匹配，即匹配到换行符就停止
 */


// 1. 正则表达式的创建
// 1.1 字面量创建
// const reg1 = /abc/
// 1.2 构造函数创建
// const reg2 = new RegExp('abc')


// 2. 正则表达式的匹配
// 2.1 test
// const reg1 = /abc/
// console.log(reg1.test('abc')) // true
// 2.2 exec
// const reg1 = /abc/
// console.log(reg1.exec('abc')) // ["abc", index: 0, input: "abc", groups: undefined]


// 3. 正则表达式的匹配模式
// 3.1 匹配模式的修饰符，i: 忽略大小写，g: 全局匹配, m: 多行匹配
// 3.2 + 修饰符, 匹配前面的子表达式一次或多次
// 3.3 * 修饰符, 匹配前面的子表达式零次或多次
// 3.4 ? 修饰符, 匹配前面的子表达式零次或一次

// 4. 量词，使用 {} 来表示
// {n} 修饰符, 匹配前面的子表达式n次
// {n,} 修饰符, 匹配前面的子表达式至少n次
// {n,m} 修饰符, 匹配前面的子表达式至少n次，但是不超过m次
//  ^ 修饰符, 匹配输入的开始位置
//  $ 修饰符, 匹配输入的结束位置
// \D 修饰符, 匹配一个非数字字符
// \d 修饰符, 匹配一个数字字符
// \s 修饰符, 匹配一个空白字符, 包含空格、制表符、换页符和换行符
// \w 修饰符, 匹配一个单字字符（字母、数字或者下划线）


// 5. 正则表达式的转义，使用 \ 来转义
//console.log('hello world.'.replace(/\./g, '#')) // hello world#

// 6.词边界，\b
// console.log('hello world'.replace(/\b/g, '#')) // #hello# #world#

// 7. 分组，使用 () 来分组
let text = '<h1>hello 1</h1><p>hello 2</p>'
let iterator = text.matchAll(/\\?<(.+?)>/ig)
console.log(iterator.next().value[1]) // h1
console.log(iterator.next().value[1]) // /h1
console.log(iterator.next().value[1]) // p
console.log(iterator.next().value[1]) // /p

// 8. [] 匹配中括号中的任意一个字符
// 8.1 [abc] 匹配 a 或 b 或 c
// 8.2 [^abc] 匹配除了 a 或 b 或 c 之外的任意一个字符
// 8.3 [a-z] 匹配 a 到 z 之间的任意一个字符
// 8.4 [^a-z] 匹配除了 a 到 z 之间的任意一个字符

// 9. | 匹配任意一个表达式

// 10. 贪婪匹配和惰性匹配
// 10.1 贪婪匹配，尽可能多的匹配，正则表达式默认是贪婪匹配
// 10.2 惰性匹配，尽可能少的匹配，使用 ? 来实现惰性匹配
//let text = '<h1>hello h1</h1><h2>hello h2</h2>'
//console.log(text.match(/<.+>/ig)) // [ '<h1>hello h1</h1><h2>hello h2</h2>' ]
//console.log(text.match(/<.+?>/ig)) // [ '<h1>', '</h1>', '<h2>', '</h2>' ]



