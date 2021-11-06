function plusMinus(arr) {
    let cnts = [0, 0, 0];
    arr.forEach(v => v > 0 ? cnts[0]++ : v < 0 ? cnts[1]++ : cnts[2]++);
    cnts.forEach(v => console.log((v / arr.length).toFixed(6)));
}