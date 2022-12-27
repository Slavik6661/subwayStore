let x = 0;
let k = 0;
while (!(x === 1 || x === 2)) {
  x = Math.floor(Math.random() * 100);
  k++;
}
console.log(k);
