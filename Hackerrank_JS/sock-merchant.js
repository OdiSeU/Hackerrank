function sockMerchant(n, ar) {
    let ans = 0, mem = {};
    ar.forEach(v => {
        mem[v] ? mem[v]++ : mem[v] = 1;
        if(mem[v] === 2) {
            mem[v] = 0;
            ans++;
        } 
    });
    return ans;
}