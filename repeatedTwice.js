var first, last, sum;
for (var i = 0; i < 100; i++) {
  last = i % 10;
  first = Math.floor(i / 10);
  sum = last * 10 + first;
  if (sum === i) {
    console.log(i);
  }
}
