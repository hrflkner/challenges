// Solutiokn : Regex and .replace()

function stringClean(s) {
    return s.replace(/[0-9]/g, '');
}

console.log(stringClean('(E3at m2e2!!)'));

function stringClean(s) {
    return s.replace(/\d/g, '');
}
