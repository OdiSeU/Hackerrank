function angryProfessor(k, a) {
    let cnt = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] <= 0 && ++cnt >= k) return 'NO';
    }
    return 'YES';
}
