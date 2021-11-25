let memoi = { 0:1 };
function utopianTree(n) {
    if(memoi[n]) return memoi[n];
    return memoi[n] = n & 1 ? utopianTree(n-1) * 2 : utopianTree(n-1) + 1;
}