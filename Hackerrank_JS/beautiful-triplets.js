function beautifulTriplets(d, arr) {
    let cnts = {}, ans = 0;
    arr.forEach(v => {
        cnts[v] ? cnts[v]++ : cnts[v] = 1;
    });
    arr.forEach(v => {
        if(cnts[v] && cnts[v + d] && cnts[v + d + d])
            ans += cnts[v+d] * cnts[v+d+d];
    });
    return ans;
}