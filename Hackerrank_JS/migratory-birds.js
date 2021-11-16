function migratoryBirds(arr) {
    let cnt = [0, 0, 0, 0, 0];
    let max = 0, idx;
    arr.forEach(v => {
        if(++cnt[v-1] > max || (cnt[v-1] === max && v < idx)) {
            max = cnt[v - 1];
            idx = v;
        }
    });
    return idx;
}