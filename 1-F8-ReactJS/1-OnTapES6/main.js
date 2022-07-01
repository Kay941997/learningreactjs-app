//!Ôn lại Arrow Function:
//1:
const logger = (log) => {
    console.log(log);
}
logger("abcxyz");
//2:
const sum = ( a, b ) => a + b;
console.log(sum(2, 2));

const sum1 = (a, b) => ({a: a, b: b});
console.log(sum1(2, 2))
//3:
const course = {
    name: 'JS',
    getName: function() {
        return this.name //context
    },
    // getName1: () => {
    //     return this.name //undefined
    // }
}; 
console.log(course.getName()) //'JS'
// console.log(course.getName1()) //undefined
//4:
const Course = function(name, price) {
    this.name = name;
    this.price = price;
}
const jsCourse = new Course('JS', 1000);
console.log(jsCourse) //'JS', 1000

// const Course1 = (name, price) => { //not constructor
//     this.name = name;
//     this.price = price;
// }
// const jsCourse1 = new Course1('JS', 1000);
// console.log(jsCourse1) 

//!Ôn tập Enhanced Object Literals:
//1:
var fieldName = 'new-name';
var fieldPrice = 'price';

const course1 = {
    name: 'JS',
    [fieldName]: 'JS',
    [fieldPrice]: 1000
};
console.log(course1); //name: 'JS', new-name: 'JS', price: 1000
//bt 1:
// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
// Gợi ý: Sử dụng phương thức reduce
function arrToObj(arr) {
    var obj = arr.reduce((acc, cur) => {
        return {...acc,[cur[0]] : cur[1]};
    }, {});
    return obj;
}

//!Ôn tập Toán Tử Destructuring và Toán Tử Rest và Spread Operator:
//!Destructuring:
//1:
var array1 = ['JS', 'PHP', 'Ruby'];
var [a, b, c] = array1; //'JS', 'PHP', 'Ruby' //todo: Destructuring
var [a, ,c] = array1; //'JS', 'Ruby'

//!Rest Parameters: (định nghĩa ra tham số - khác Spread)
//2:
var [a, b, ...rest] = array1; //todo: định nghĩa tham số - Rest Parameters
console.log(rest); //'Ruby'

var course2 = {
    name: 'JS',
    price: 2000,
    image: 'img-address',
    children: {
        name: 'ReactJS'
    }
}
var { name, price, image } = course2;
var { name, ...object } = course2; //'JS', { price:2000, image: 'img-address', children: {name: 'ReactJS'} }
var { name: parentName, children: { name: childrenName } } = course2;
console.log(parentName); //'JS'

//bt 1:
const { aaa = 'default', bbb, ...resttt } = { bbb: 'val1', ccc: 'val2', ddd: 'val3' };
console.log(aaa, bbb, resttt); // Output: 'default', 'val1', {c:'val2', d:'val3'}

//bt 2:
function logger1(a, b, ...params) {
    console.log(params);
}
logger1(1,2,3,4); //3,4

//!Spread Operator: (truyền đối số - khác Rest)
//1:
var array2 = ['JS', 'Ruby', 'PHP'];
var array3 = ['ReactJS', 'Dart'];
var array4 = [...array2, ...array3] //todo: truyền đối số - Spread Operator
console.log(array4);

//2:
var defaultConfig = {
    api: 'https://abc-xyz-lmn',
    version: 'v1',
    other: 'other'
};
var exerciseConfig = {
    ...defaultConfig,
    api: 'https://lmn-xyz-abc',
};
console.log(exerciseConfig) //{ api: 'https://lmn-xyz-abc', version: 'v1', other: 'other' }

//3:
var a = ['JS', 'Ruby', 'PHP'];
function logger2(...rest) { //todo: Rest Parameter
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}
logger2(...a); //todo: Spread Operator

//!Ôn tập JS Modules (import, export):
import testModule from './testmodule.js'
console.log(testModule);

