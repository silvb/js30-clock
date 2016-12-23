'use strict';

// FUNCTIONS
function rotateHands(hand, degrees) {
    if (degrees === 90) {
        hand.style['transition-duration'] = '0s';
    } else {
        hand.style['transition-duration'] = '0.1s';
    }

    hand.style.transform = 'rotate(' + degrees + 'deg)';
}

function updateClock(hourHand, minuteHand, secondHand) {
    var time = new Date();
    var hour = time.getHours() <= 12 ? time.getHours() : time.getHours() - 12;
    var minute = time.getMinutes();
    var second = time.getSeconds();

    var hourDegrees = 360 * (hour / 12) + 360 / 12 * (minute / 60) + 90;
    var minuteDegrees = minute / 60 * 360 + 90;
    var secondDegrees = 360 * (second / 60) + 90;

    rotateHands(hourHand, hourDegrees);
    rotateHands(minuteHand, minuteDegrees);
    rotateHands(secondHand, secondDegrees);
}

// MAIN
var hands = {
    hour: document.querySelector('.hour-hand'),
    minute: document.querySelector('.minute-hand'),
    second: document.querySelector('.second-hand')
};

for (var prop in hands) {
    hands[prop].style.display = 'none';
}

setTimeout(function () {
    for (var _prop in hands) {
        hands[_prop].style.display = 'initial';
    }
}, 1000);

setInterval(updateClock, 1000, hands.hour, hands.minute, hands.second);
