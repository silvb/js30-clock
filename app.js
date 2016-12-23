// FUNCTIONS
function rotateHands(hand, degrees) {
    if (degrees === 90) {
        hand.style['transition-duration'] = '0s';
    } else {
        hand.style['transition-duration'] = '0.05s';
    }

    hand.style.transform = `rotate(${degrees}deg)`;
}

function updateClock(hourHand, minuteHand, secondHand) {
    const time = new Date();
    const hour = time.getHours() <= 12 ? time.getHours() : time.getHours() - 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourDegrees = (360 * (hour / 12)) + ((360 / 12) * (minute / 60)) + 90;
    const minuteDegrees = ((minute / 60) * 360) + 90;
    const secondDegrees = (360 * (second / 60)) + 90;

    rotateHands(hourHand, hourDegrees);
    rotateHands(minuteHand, minuteDegrees);
    rotateHands(secondHand, secondDegrees);
}

// MAIN
const hands = {
    hour: document.querySelector('.hour-hand'),
    minute: document.querySelector('.minute-hand'),
    second: document.querySelector('.second-hand')
};

for (const prop in hands) {
    hands[prop].style.display = 'none';
}

setTimeout(() => {
    for (const prop in hands) {
        hands[prop].style.display = 'initial';
    }
}, 1000);

setInterval(updateClock, 1000, hands.hour, hands.minute, hands.second);
