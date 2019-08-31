function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    let [from, to] = [Math.max(...a), Math.min(...b)];
    for(let curr = from; curr <= to; curr++) {
    	let a_cond = true;
    	for (let ele in a) {
    		a_cond = a_cond && (curr % a[ele] == 0);
    		if (!a_cond) break;
    	}
    	if (!a_cond) continue;
    	let b_cond = true;
    	for (let ele in b) {
    		b_cond = b_cond && (b[ele] % curr == 0);
    		if(!b_cond) break;
    	}
    	if(b_cond) count++;
    }
    return count;
}

result = getTotalX(
[2,6],
[24,36]
)

console.log(result)