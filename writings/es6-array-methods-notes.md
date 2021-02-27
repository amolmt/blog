---
title: "ES6 Array Methods - Notes"
date: "2021-02-28"
og:
  description: "Notes on important ES6 array methods"
  image: "https://amolt.me/og/usestate.png"
author:
  twitter: "amoltangade"
  name: "Amol Tangade"
---

### ES6 Array methods

```js
let items = [
  { name: "iPhone", price: 1200 },
  { name: "OnePlus", price: 1000 },
  { name: "Samsung", price: 900 },
];
```

#### filter

```js
let cheapestPhone = items.filter((item) => {
  return item.price < 1000;
});

console.log(cheapestPhone);
```

#### map

```js
let brands = items.map((i) => {
  return i.name;
});

console.log(brands);
```

#### find

```js
let resultByName = items.find((i) => {
  return i.name === "iPhone";
});

console.log(resultByName);
```

#### foreach

```js
let justNames = [];

items.forEach((i) => justNames.push(i.name));

console.log(justNames);
```

#### some

```js
let mostExp = items.some((i) => i.price > 1000);

console.log(mostExp);
```

#### every

```js
let isLessThanT = items.every((i) => i.price <= 1200);
console.log(isLessThanT);
```

#### reduce

```js
const totalPrice = items.reduce((curr, i) => {
  return i.price + curr;
}, 0);

console.log(totalPrice);
```

#### includes

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const includesOnePlus = numbers.includes(2);

console.log(includesOnePlus);
```

#### flatMap

```js
const metrix = [
  [1, 2, 3],
  [4, 5, 6],
];
const flatMatrix = metrix.flat(1);
console.log(flatMatrix);
const deepMetrix = [[1, 1], [[[[4]]]]];
const flatDeepMetrix = deepMetrix.flat(Infinity);
const totalDeepMetrix = deepMetrix.flat(Infinity).reduce((a, v) => a + v, 0);
const nums = [1, 2, 3];
const strings = ["one", "two", "three"];
```

#### mapping using map()

```js
const mapped = nums.map((n, i) => [strings[i], n]);
const flatMapped = nums.flatMap((n, i) => [strings[i], n]);
console.log(flatMapped);
console.log(mapped);
```

#### reduceRight

```js
const rString = ["t", "s", "e", "b"];
console.log(rString.reduce((c, v) => c + v));
console.log(rString.reduce((c, v) => v + c));
console.log(rString.reduceRight((c, v) => c + v));
```
