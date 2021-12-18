function howManyGames(p, d, m, s) {
    let cnt = 0;
    while(p <= s) {
        s -= p;
        cnt++;
        p = m > p - d ? m : p - d;
    }
    return cnt;
}