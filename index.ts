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

const run = (name: string, age?: number): string => {
  return `${name}---${age}`
}

const res: string = run('唐三', 12)

console.log(res);


