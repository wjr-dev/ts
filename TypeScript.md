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
```



