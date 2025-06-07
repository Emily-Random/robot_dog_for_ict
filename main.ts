input.onButtonPressed(Button.A, function () {
    radio.sendString("left0")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("up0")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up0") {
        pins.servoWritePin(AnalogPin.P0, zero - 20)
        basic.pause(speed)
        radio.sendString("up1")
    } else if (receivedString == "up1") {
        pins.servoWritePin(AnalogPin.P0, zero + 20)
        basic.pause(speed)
        radio.sendString("up2")
    } else if (receivedString == "up2") {
        pins.servoWritePin(AnalogPin.P0, zero + 20)
        basic.pause(speed)
        radio.sendString("up3")
    } else if (receivedString == "up3") {
        pins.servoWritePin(AnalogPin.P0, zero - 20)
        basic.pause(speed)
    } else if (receivedString == "left0") {
        pins.servoWritePin(AnalogPin.P0, zero + 20)
        basic.pause(speed)
        radio.sendString("left1")
    } else if (receivedString == "left1") {
        pins.servoWritePin(AnalogPin.P0, zero + 0)
        basic.pause(speed)
        radio.sendString("left2")
    } else if (receivedString == "left2") {
        pins.servoWritePin(AnalogPin.P0, zero - 40)
        basic.pause(speed)
        radio.sendString("left3")
    } else if (receivedString == "left3") {
        pins.servoWritePin(AnalogPin.P0, zero + 30)
        basic.pause(speed)
    } else if (receivedString == "right0") {
        pins.servoWritePin(AnalogPin.P0, zero - 20)
        basic.pause(speed)
        radio.sendString("right1")
    } else if (receivedString == "right1") {
        pins.servoWritePin(AnalogPin.P0, zero + 0)
        basic.pause(speed)
        radio.sendString("right2")
    } else if (receivedString == "right2") {
        pins.servoWritePin(AnalogPin.P0, zero + 40)
        basic.pause(speed)
        radio.sendString("right3")
    } else if (receivedString == "right3") {
        pins.servoWritePin(AnalogPin.P0, zero - 40)
        basic.pause(speed)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right0")
})
let speed = 0
let zero = 0
zero = 90
pins.servoWritePin(AnalogPin.P0, zero)
speed = 100
radio.setGroup(13)
basic.showIcon(IconNames.Yes)
music.play(music.stringPlayable("C D E F G A B C5 ", 300), music.PlaybackMode.UntilDone)
