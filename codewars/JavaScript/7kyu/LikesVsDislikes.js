// Solution : Conditional State Updates

function likeOrDislike(buttons) {
    let buttonState = 'Nothing';
    for (let i = 0; i < buttons.length; i++) {
        if (buttonState !== Like && buttons[i] === Like) {
            buttonState = 'Like';
        } else if (buttonState !== Dislike && buttons[i] === Dislike) {
            buttonState = 'Dislike';
        } else {
            buttonState = 'Nothing';
        }
    }
    return buttonState;
}
