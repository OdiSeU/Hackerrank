function pickingNumbers(a) {
    let max = 0;
    let check = Array.from(Array(100),()=>0);
    a.forEach(v => check[v]++);
    for(let i = 1; i < 100; i++) {
        max = Math.max(max, check[i-1] + check[i]);
    }
    return max;
}