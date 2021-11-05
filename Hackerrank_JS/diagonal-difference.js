function diagonalDifference(arr) {
    let a = 0, b = 0;
    for(let i = 0; i < arr.length; i++) {
        a += arr[i][i];
        b += arr[i][arr.length - i - 1];
    }
    return Math.abs(a - b);
}