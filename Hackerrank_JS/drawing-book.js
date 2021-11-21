function pageCount(n, p) {
    return Math.min(p>>1, (n>>1) - (p>>1));
}
