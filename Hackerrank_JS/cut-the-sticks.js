function cutTheSticks(arr) {
    let len = arr.length, ans = [len];
    arr.sort((a,b)=>a-b);
    for(let i = 1; i < len; i++) {
        if(arr[i-1] !== arr[i]) ans.push(len - i)
    }
    return ans;
}