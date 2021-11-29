function viralAdvertising(n) {
    let shared = 5, liked, cumulative = 0;
    while(n--) {
        liked = shared / 2 | 0;
        cumulative += liked;
        shared =  liked * 3;
    }
    return cumulative;
}