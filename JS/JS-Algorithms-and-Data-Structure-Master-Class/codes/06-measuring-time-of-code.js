function addUpTo1(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

var t1 = performance.now();
addUpTo1(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log("============");

function addUpTo2(n) {
	return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
