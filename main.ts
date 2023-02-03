input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Angry)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Meh)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    `)
basic.forever(function () {
	
})
