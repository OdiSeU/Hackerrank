function extraLongFactorials(n) {
    let fact = BigInt(1);
    while(--n) fact *= BigInt(n+1);
    console.log(`${fact}`);
}