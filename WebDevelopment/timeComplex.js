const transactions = ["bin", "can", "bin", "bin"];

const { PerformanceObserver, performance } = require("perf_hooks");
// should product this result:

// bin 3
// can 1

// Can anyone help with what I could have done better to make this run faster?

function groupTransactions(transactionsInput) {
  let items = new Set(transactionsInput);
  items = [...items].sort();
  items = items.map(
    x => x + " " + transactionsInput.filter(y => y == x).length
  );
  return items;
}

var start = performance.now();
for (let j = 0; j <= 10; j++) {
  for (let i = 0; i <= 100000; i++) {
    groupTransactions(transactions);
  }
}
var end = performance.now();

console.log(end - start);
