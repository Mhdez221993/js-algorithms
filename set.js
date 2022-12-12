const set = new Set([1, 2, 3]);

console.log(set.has(1));
console.log(set.delete(1));
console.log(set.add(4));

console.log(set.entries());

// console.log(set.clear());
console.log(set);

for (let item of set) {
  console.log(item);
}
