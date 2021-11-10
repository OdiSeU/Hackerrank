function getTotalX(a, b) {
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const lcm = (a, b) => a * b / gcd(a, b);
    let div = a.reduce((acc, v) => lcm(acc, v));
    let min = b.reduce((acc, v) => Math.min(acc, v))
    let cnt = 0;
    
    for(let i = div; i <= min; i += div)
        if(b.every(v=>v%i===0)) cnt++;
    
    return cnt;
}