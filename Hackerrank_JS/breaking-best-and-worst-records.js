function breakingRecords(scores) {
    let min, max, cnts = [0, 0];
    min = max = scores[0];
    scores.forEach(v => {
        if(max < v) {
            max = v;
            cnts[0]++;
        }
        if(v < min) {
            min = v;
            cnts[1]++;
        }
    })
    return cnts;
}