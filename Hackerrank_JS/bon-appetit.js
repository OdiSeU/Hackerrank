function bonAppetit(bill, k, b) {
    let sum = 0, ans;
    for(let i = 0; i < bill.length; i++) {
        if(i !== k) sum += bill[i];
    }
    ans = b - sum / 2;
    console.log(ans ? ans : 'Bon Appetit');
}