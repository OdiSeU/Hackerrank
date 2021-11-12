function catAndMouse(x, y, z) {
    let diff = Math.abs(x - z) - Math.abs(y - z);
    if(diff < 0) return 'Cat A';
    else if(diff > 0) return 'Cat B';
    else return 'Mouse C';
}