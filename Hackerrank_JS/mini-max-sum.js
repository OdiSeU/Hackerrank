function miniMaxSum(arr) {
    let mid = 0;
    arr.sort((a,b)=>a-b);
    mid = arr[1] + arr[2] + arr[3];
    console.log(arr[0]+mid, arr[4]+mid);
}