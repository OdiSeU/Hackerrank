function getMoneySpent(keyboards, drives, b) {
    let ans = -1, sum;
    for(let i = 0; i < keyboards.length; i++) {
        for(let j = 0; j < drives.length; j++) {
            sum = keyboards[i] + drives[j];
            if(sum <= b && ans < sum) ans = sum;
        }
    }
    return ans;
}