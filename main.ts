enum RadioMessage {
    message1 = 49434,
    Connect = 11751,
    A = 18289,
    B = 9031,
    fight = 45636,
    DED = 18817,
    ready = 31336,
    yes = 16427,
    cmoon = 18781
}
radio.onReceivedMessage(RadioMessage.A, function () {
    Player2_X += -1
    Display()
})
radio.onReceivedMessage(RadioMessage.fight, function () {
    rocket_2_in_screen = true
    rocket_2_X = Player2_X
    rocket_2_Y = 0
    for (let index = 0; index < 4; index++) {
        rocket_2_Y += 1
        Display()
        basic.pause(100)
    }
    if (Player_X == rocket_2_X) {
        HP += -1
    }
    rocket_2_in_screen = false
    Display()
})
input.onButtonPressed(Button.A, function () {
    if (ready == 1 && _2_ready == 1) {
        if (!(Player_X == 0)) {
            Player_X += -1
            Display()
            radio.sendMessage(RadioMessage.A)
        }
    }
})
radio.onReceivedMessage(RadioMessage.ready, function () {
    if (ready == 1) {
        _2_ready = 1
        Player_X = 4
        radio.sendMessage(RadioMessage.yes)
    } else {
        _2_ready = 1
        admin = 2
    }
})
function Display () {
    if (Game_end == false) {
        basic.clearScreen()
        led.plotBrightness(Player2_X, 0, 100)
        led.plot(Player_X, 4)
        if (rocket_2_in_screen == true) {
            led.plotBrightness(rocket_2_X, rocket_2_Y, 100)
        }
        if (rocket_in_screen == true) {
            led.plot(rocket_X, rocket_Y)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (ready == 1 && _2_ready == 1) {
        rocket_in_screen = true
        radio.sendMessage(RadioMessage.fight)
        rocket_X = Player_X
        rocket_Y = 4
        for (let index = 0; index < 4; index++) {
            rocket_Y += -1
            Display()
            basic.pause(100)
        }
        rocket_in_screen = false
        Display()
    }
})
radio.onReceivedMessage(RadioMessage.DED, function () {
    Game_end = true
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        # . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . . . .
        # . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . # . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . # .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    if (ready == 1 && _2_ready == 1) {
        if (!(Player_X == 4)) {
            Player_X += 1
            Display()
            radio.sendMessage(RadioMessage.B)
        }
    }
})
radio.onReceivedMessage(RadioMessage.B, function () {
    Player2_X += 1
    Display()
})
radio.onReceivedMessage(RadioMessage.yes, function () {
    Player2_X = 4
})
radio.onReceivedMessage(RadioMessage.cmoon, function () {
    basic.showLeds(`
        . . # # .
        . . # . #
        . . # # .
        . . # . #
        . . # # .
        `)
    basic.showLeds(`
        . . # . #
        . . # # .
        . . # . #
        . . # # .
        . . # . #
        `)
})
let rocket_X = 0
let rocket_in_screen = false
let admin = 0
let _2_ready = 0
let ready = 0
let Player_X = 0
let rocket_2_X = 0
let rocket_2_in_screen = false
let Player2_X = 0
let rocket_2_Y = 0
let rocket_Y = 0
let Game_end = false
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
Game_end = false
let HP = 5
radio.sendMessage(RadioMessage.Connect)
rocket_Y = 100
rocket_2_Y = 100
basic.forever(function () {
    if (_2_ready == 1 && !(ready == 1)) {
        basic.showLeds(`
            . . # . #
            . . # # .
            . . # . #
            . . # # .
            . . # . #
            `)
    }
    if (ready == 1 && !(_2_ready == 1)) {
        basic.showLeds(`
            # . # . .
            . # # . .
            # . # . .
            . # # . .
            # . # . .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (ready == 0) {
            radio.sendMessage(RadioMessage.ready)
            ready = 1
            if (admin == 0) {
                admin = 1
            }
            basic.pause(1000)
        } else {
            if (_2_ready == 0) {
                radio.sendMessage(RadioMessage.cmoon)
                basic.pause(1000)
            }
        }
    }
})
basic.forever(function () {
    if (HP == 0 && Game_end == false) {
        radio.sendMessage(RadioMessage.DED)
        Game_end = true
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            # # # # #
            `)
        basic.showIcon(IconNames.No)
    }
})
