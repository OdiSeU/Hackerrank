function climbingLeaderboard(ranked, player) {
    let dict = new Map(), ranks = [];
    ranked.forEach(v => {
        if(dict.has(v)) dict.set(v, dict.get(v)+1);
        else dict.set(v, 1);
    });
    let rnk = 1, i = player.length-1;
    for(let [k, v] of dict) {
        while(k <= player[i]) {
            ranks.push(rnk);
            i--;
        }
        rnk++;
    }
    while(i-->=0) ranks.push(rnk);
    return ranks.reverse();
}