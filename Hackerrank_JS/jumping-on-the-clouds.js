function jumpingOnClouds(c) {
    let cnt = 0;
    for(let i = 0; i < c.length-1; i+=2, cnt++) {
        if(c[i] === 1) i--;
    }
    return cnt;
}