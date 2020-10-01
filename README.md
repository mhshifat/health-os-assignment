### Assignment 2:

```
const languagesArray = [
  "JavaScript",
  "Python",
  "PHP",
  "Java",
  "C",
  "Rust",
  "Go",
];

mapMyArray(languagesArray, (item) => {
  console.log(`${item} string length is: ${item.length}`);
});

function mapMyArray(array, operation) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(operation(array[i], i));
  }
  return newArray;
}
```
