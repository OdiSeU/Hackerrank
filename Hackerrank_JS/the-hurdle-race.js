function hurdleRace(k, height) {
    let max = height.reduce((acc, v)=>Math.max(acc, v));
    return max > k ? max - k : 0;
}