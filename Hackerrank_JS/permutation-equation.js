function permutationEquation(p) {
    let res = Array(p.length);
    p.forEach((v, i) => res[v-1] = i+1);
    return res.map(v => res[v-1]);
}