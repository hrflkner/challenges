// Solution : .filter(boolean)

function friend(friends) {
    return friends.filter((x) => x.length === 4);
}

console.log(friend(['ron', 'mike', 'harry', 'john']));
