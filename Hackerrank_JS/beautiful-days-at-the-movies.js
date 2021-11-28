function beautifulDays(i, j, k) {
    let cnt = 0, sub;
    for(let x = i; x <= j; x++) {
        sub = x - [...`${x}`].reverse().join('');
        if(Number.isInteger(sub/k)) cnt++;
    }
    return cnt;
}