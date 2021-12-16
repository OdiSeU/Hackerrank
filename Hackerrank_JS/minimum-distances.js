function minimumDistances(a) {
    let min = 12345;
    for(let i = 0; i < a.length - 1; i++) {
        for(let j = i+1; j < a.length; j++) {
            if(a[j] === a[i]) min = Math.min(min, j - i);
        }
    }
    return min === 12345 ? -1 : min;
}