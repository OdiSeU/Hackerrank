function circularArrayRotation(a, k, queries) {
    k %= a.length;
    return queries.map(v => a[(v - k + a.length) % a.length]);
}