function equalizeArray(arr) {
    let cnts = {}, max = 0;
    arr.forEach(v => {
        cnts[v] ? cnts[v]++ : cnts[v] = 1;
        max = Math.max(max, cnts[v]);
    });
    
    return arr.length - max;
}