## 数据类型

- 数字 number

```typescript
let num: number = 123 
```

- 布尔 boolean

```typescript
let flag: boolean = true
```

- 字符串 string

```typescript
let str: string = 'hello'
```

- 数组 array

```typescript
let arr: string[] = ['a', 'b', 'c']

let arr1: Array<number> = [1, 2, 3]
```

- 元组 tuple，属于数组的一种

```typescript
let arr2: [string, number, boolean] = ['a', 123, true]
```

- 枚举 enum

```typescript
enum Flag {
  success = 1,
  error = 0
}

let f: Flag = Flag.success

// enum 默认值是索引
enum Color {
  red,
  blue = 5,
  orange
}

let color1: Color = Color.red
let color2: Color = Color.blue
let color3: Color = Color.orange

console.log(color1, 'color1'); // 0
console.log(color2, 'color2'); // 5
console.log(color3, 'color4'); // 6 
```

- 任意 any

```typescript
let num: any = 123
num = 'abc'
```

- undefined 和 null

```typescript
let num: number | undefined | null
console.log(num); // undefined
num = 123
console.log(num); // 123
num = null
console.log(num); // null
```

- void，便是方法没有任何返回类型

```typescript
function run(): void {
  console.log('run');
}

run()
```

- never，其它类型（包括 null 和 undefined ）的子类型，代表从不会出现的值

```typescript
let a: never = (()=>{
    throw new error('error')
})()
```



## 函数

```typescript
const run = (name: string, age: number):string => {
	return `${name}---${age}`
}
const res: string = run('唐三', 12)
```

- 可选参数

```typescript
// 可选参数必须配到后面
const run = (name: string, age?: number): string => {
  return `${name}---${age}`
}

const res: string = run('唐三')
```

- 默认参数

```typescript
const run = (name: string, age: number = 20): string => {
  return `${name}---${age}`
}

const res: string = run('唐三')
```

- 剩余参数

```typescript
const total = (a: number, b: number, ...args: number[]): number => {
  let sum = a + b
  args.forEach(item => {
    sum += item
  })
  return sum
}
total(1, 2, 3, 4, 5)
```

- 函数重载

```typescript
function getInfo(name: string): string
function getInfo(age: number): string
function getInfo(str: any): any{
  if (typeof str === 'string') {
    return `我叫${str}`
  } else {
    return `我的年龄是${str}`
  }
}

console.log(getInfo('唐三'));
console.log(getInfo(20));
```

## 类

### 定义类 class

```typescript
class Person {
  name:string
  constructor(name:string) {
    this.name = name
  }
  getName():string{
    return this.name
  }
  setName(name:string):void{
    this.name = name
  }
}

const p = new Person('唐三')
console.log(p.getName());
p.setName('海神')
console.log(p.getName());
```

### 继承 extends

```typescript
class Person {
  name:string
  constructor(name:string) {
    this.name = name
  }
  getName():string{
    return this.name
  }
  setName(name:string):void{
    this.name = name
  }
}

class Teacher extends Person {
  constructor(name:string){
    super(name)
  }
}

const t = new Teacher('孔子');
console.log(t.getName());
```

### 修饰符

- public： 公有类型，在类、子类、实例里都可以访问
- private：私有类型，在类里可以访问，子类和实例里都不能访问
- protected：保护类型，在类、子类里可以访问，实例里访问不到



