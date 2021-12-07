function repeatedString(s, n) {
    let cnt0 = 0, cnt1 = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a') {
            cnt0++;
            if(i < n % s.length) cnt1++;
        }
    }
    return Math.floor(n / s.length) * cnt0 + cnt1;
}