function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let cntA = 0, cntB = 0;
    
    apples.forEach(v => {
        if(s <= v+a && v+a <= t) cntA++;
    })
    oranges.forEach(v => {
        if(s <= v+b && v+b <= t) cntB++;
    })

    console.log(cntA);
    console.log(cntB);
}