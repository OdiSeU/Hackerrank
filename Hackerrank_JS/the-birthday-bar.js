function birthday(s, d, m) {
    let sum = 0, cnt = 0;
    for(let i = 0; i < m; i++) sum += s[i];
    if(sum === d) cnt++;
    for(let i = m; i < s.length; i++) {
        sum += s[i] - s[i-m];
        if(sum === d) cnt++;
    }
    return cnt;
}