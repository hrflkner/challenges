// Solution : Sort and return first value

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b)[0];
    }
}
