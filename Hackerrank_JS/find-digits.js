function findDigits(n) {
    return [...`${n}`].reduce((acc, v) => n%v===0? acc+1 : acc, 0);
}