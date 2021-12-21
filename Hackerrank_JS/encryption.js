function encryption(s) {
    let cols = Math.ceil(Math.sqrt(s.length));
    let enc = Array.from(Array(cols),()=>'');
    for(let i = 0; i < s.length; i++) enc[i%cols] += s[i];
    return enc.join(' ')
}