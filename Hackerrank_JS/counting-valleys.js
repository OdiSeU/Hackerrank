function countingValleys(steps, path) {
    let lev = 0, cnt = 0;
    for(let i = 0; i < steps; i++) {
        if(path[i] === 'U') {
            if(++lev === 0) cnt++;
        }
        else lev--;
    }
    return cnt;
}