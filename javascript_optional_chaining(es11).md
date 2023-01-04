# optional chaining

```javascript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

const catName = adventurer.cat?.name;
console.log(catName);
// expected output: Dinah

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```