enum RadioMessage {
    message1 = 49434,
    Connect = 11751,
    A = 18289,
    B = 9031,
    fight = 45636,
    DED = 18817
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
    if (!(Player_X == 0)) {
        Player_X += -1
        Display()
        radio.sendMessage(RadioMessage.A)
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
})
radio.onReceivedMessage(RadioMessage.DED, function () {
    Game_end = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    if (!(Player_X == 4)) {
        Player_X += 1
        Display()
        radio.sendMessage(RadioMessage.B)
    }
})
radio.onReceivedMessage(RadioMessage.B, function () {
    Player2_X += 1
    Display()
})
radio.onReceivedMessage(RadioMessage.Connect, function () {
    Player_X = 2
    Player2_X = 2
})
let rocket_X = 0
let rocket_in_screen = false
let rocket_2_X = 0
let rocket_2_in_screen = false
let rocket_2_Y = 0
let rocket_Y = 0
let Game_end = false
let Player2_X = 0
let Player_X = 0
Player_X = 2
Player2_X = 2
Game_end = false
let HP = 5
radio.sendMessage(RadioMessage.Connect)
rocket_Y = 100
rocket_2_Y = 100
Display()
basic.forever(function () {
    if (HP == 0 && Game_end == false) {
        radio.sendMessage(RadioMessage.DED)
        Game_end = true
        basic.showIcon(IconNames.No)
    }
})
