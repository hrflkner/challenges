// Solution : First Attempt

function validateUsr(username) {
    if (username.length >= 4 && username === username.toLowerCase()) {
        return /^[a-z0-9_]+$/i.test(username);
    } else {
        return false;
    }
}

console.log(validateUsr('asddsa'));

// Solution : Better Version

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username);
}
