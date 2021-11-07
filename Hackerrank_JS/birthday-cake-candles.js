function birthdayCakeCandles(candles) {
    let max = 0, cnt = 0;
    candles.forEach(v => {
        if(max < v) {
            max = v;
            cnt = 1;
        }
        else if(max === v) cnt++;
    });
    return cnt;
}