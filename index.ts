// console.log('hello ts')

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

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }
}

const p = new Person('唐三')
console.log(p.getName());
p.setName('海神')
console.log(p.getName());

class Teacher extends Person {
  constructor(name: string) {
    super(name)
  }
}
const t = new Teacher('孔子');
console.log(t.getName());

