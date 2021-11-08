function timeConversion(s) {
    let h = s.slice(0,2) % 12;
    if(s[8] === 'P') h += 12;
    return `${h}`.padStart(2, 0) + s.slice(2, -2);
}