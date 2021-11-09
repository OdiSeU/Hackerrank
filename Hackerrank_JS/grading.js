function gradingStudents(grades) {
    return grades.map(v => (v>37 && v%5>2) ? v + 5 - v%5 : v);
}