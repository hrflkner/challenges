function toFreud(string) {
    return string === ''
        ? ''
        : string
              .split(' ')
              .map((x) => 'sex')
              .join(' ');
}

console.log(toFreud('Freudian translation example'));
