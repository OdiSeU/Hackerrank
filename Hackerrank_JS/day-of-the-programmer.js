function dayOfProgrammer(year) {
    let leap = '12.09.', other = '13.09.';
    if(year < 1918) return (year % 4 ? other : leap) + year;
    else if(year > 1918) {
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return leap + year;
        else return other + year;
    }
    else return '26.09.' + year;
}