function jumpingOnClouds(c, k) {
    let i = 0, energy = 100;
    do {
        i = (i + k) % c.length;
        energy -= c[i] * 2 + 1;
    } while(i !== 0); 
    return energy;
}