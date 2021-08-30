"use strict";
// console.log('hello ts')
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var str: string = 'hello ts'
// let num: any = 'hello ts'
// let str1: string = 'hello ts2'
// var flag: boolean = true
// flag = false
// let arr: string[] = ['a', 'b', 'c']
// let arr1: Array<number> = [1, 2, 3]
// let arr2: [string, number, boolean] = ['a', 123, true]
// console.log(arr, 'arr');
// console.log(arr1, 'arr1');
// console.log(arr2, 'arr2');
// enum Flag {
//   success = 1,
//   error = 0
// }
// var f: Flag = Flag.success
// console.log(f, 'f');
// enum Color {
//   red,
//   blue = 5,
//   orange
// }
// let color1: Color = Color.red
// let color2: Color = Color.blue
// let color3: Color = Color.orange
// console.log(color1, 'color1'); // 0
// console.log(color2, 'color2'); // 5
// console.log(color3, 'color4'); // 6
// let num: number | undefined | null
// console.log(num);
// num = 123
// console.log(num);
// num = null
// console.log(num);
// function run(): void {
//   console.log('run');
// }
// const run = (name: string, age?: number): string => {
//   return `${name}---${age}`
// }
// const res: string = run('唐三', 12)
// console.log(res);
// const total = (a: number, b: number, ...args: number[]): number => {
//   let sum = a + b
//   args.forEach(item => {
//     sum += item
//   })
//   return sum
// }
// console.log(total(1, 2, 3, 4, 5));
// function getInfo(name: string): string
// function getInfo(age: number): string
// function getInfo(str: any): any{
//   if (typeof str === 'string') {
//     return `我叫${str}`
//   } else {
//     return `我的年龄是${str}`
//   }
// }
// console.log(getInfo('唐三'));
// console.log(getInfo(20));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('唐三');
console.log(p.getName());
p.setName('海神');
console.log(p.getName());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        return _super.call(this, name) || this;
    }
    return Teacher;
}(Person));
var t = new Teacher('孔子');
console.log(t.getName());
