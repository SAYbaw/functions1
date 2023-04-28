function pythagorean (num: number, num2: number) {
    return Math.sqrt(num * num + num2 * num2)
}
function displayImg () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # . #
            . # . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    displayImg()
    basic.clearScreen()
    basic.showNumber(pythagorean(height, base))
})
let base = 0
let height = 0
height = 3
base = 4
basic.forever(function () {
	
})
