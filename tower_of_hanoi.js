function tower_of_hanoi(n, A, B, C) {
  if (n === 1) {
    console.log(`Move disk 1 from ${A} to ${C}`);
    return;
  }

  tower_of_hanoi(n - 1, A, C, B);
  console.log(`Move disk ${n} from ${A} to ${C}`);
  tower_of_hanoi(n - 1, B, A, C);
}
// Big O(2^n)

console.log(tower_of_hanoi(3, "A", "B", "C"));
