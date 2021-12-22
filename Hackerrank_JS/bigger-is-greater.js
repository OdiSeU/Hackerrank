function biggerIsGreater(w) {
    let m = -1, n, str = [...w];
    for(let i = w.length-1; i > 0; i--) {
        if(w[i-1] < w[i]) {
            m = i-1;
            break;
        }
    }
    if(m < 0) return 'no answer';
    for(let i = w.length-1; i > 0; i--) {
        if(w[m] < w[i]) {
            n = i;
            break;
        }
    }
    [str[m], str[n]] = [str[n], str[m]];
    return [...str.slice(0, m+1), ...str.slice(m+1).reverse()].join('');
}