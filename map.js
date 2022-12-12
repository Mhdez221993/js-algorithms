const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

console.log(map.entries());
console.log(map.size);

console.log(map);
