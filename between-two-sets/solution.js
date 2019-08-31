function getTotalX(a, b) {
    // Write your code here
    let [from, to] = [Math.max(...a), Math.min(...b)];
    return Array.from(
    	Array((to-from+1) < 0? 0: (to-from+1)).keys()
	)
	.map(i => i + from)
	.reduce((count, curr) => {
		let inc = a.reduce((cond, ele) => cond && curr % ele == 0, true) && b.reduce((cond, ele) => cond && ele % curr == 0, true) ? 1: 0;
		return count + inc;
	}, 0);
}

result = getTotalX(
[100,99,98,97,96,95,94,93,92,91],
[1,2,3,4,5,6,7,8,9,10]
)

console.log(result)