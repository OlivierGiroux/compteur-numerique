input.onButtonPressed(Button.A, function () {
    Nb_délèves += -1
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        basic.showNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    Nb_délèves += 1
})
let Nb_délèves = 0
basic.showNumber(0)
basic.forever(function () {
    if (Nb_délèves == 10) {
        basic.showString("Attention")
    }
})
basic.forever(function () {
    basic.showNumber(Nb_délèves)
})
