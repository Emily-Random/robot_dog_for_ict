def on_button_pressed_a():
    radio.send_string("left0")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("up0")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_string("right0")
input.on_button_pressed(Button.B, on_button_pressed_b)

zero = 90
def on_received_string(receivedString):
    if receivedString == "up0":
        pins.servo_write_pin(AnalogPin.P0, zero - 20)
        basic.pause(speed)
        radio.send_string("up1");
    elif receivedString == "up1":
        pins.servo_write_pin(AnalogPin.P0, zero + 20)
        basic.pause(speed)
        radio.send_string("up2")
    elif receivedString == "up2":
        pins.servo_write_pin(AnalogPin.P0, zero + 20)
        basic.pause(speed)
        radio.send_string("up3")
    elif receivedString == "up3":
        pins.servo_write_pin(AnalogPin.P0, zero - 20)
        basic.pause(speed)

    elif receivedString == "left0":
        pins.servo_write_pin(AnalogPin.P0, zero + 20)
        basic.pause(speed)
        radio.send_string("left1")
    elif receivedString == "left1":
        pins.servo_write_pin(AnalogPin.P0, zero + 0)
        basic.pause(speed)
        radio.send_string("left2")
    elif receivedString == "left2":
        pins.servo_write_pin(AnalogPin.P0, zero - 40)
        basic.pause(speed)
        radio.send_string("left3")
    elif receivedString == "left3":
        pins.servo_write_pin(AnalogPin.P0, zero + 30)
        basic.pause(speed)

    elif receivedString == "right0":
        pins.servo_write_pin(AnalogPin.P0, zero - 20)
        basic.pause(speed)
        radio.send_string("right1")
    elif receivedString == "right1":
        pins.servo_write_pin(AnalogPin.P0, zero + 0)
        basic.pause(speed)
        radio.send_string("right2")
    elif receivedString == "right2":
        pins.servo_write_pin(AnalogPin.P0, zero + 40)
        basic.pause(speed)
        radio.send_string("right3")
    elif receivedString == "right3":
        pins.servo_write_pin(AnalogPin.P0, zero - 40)
        basic.pause(speed)
radio.on_received_string(on_received_string)

pins.servo_write_pin(AnalogPin.P0, zero)
speed = 100
radio.set_group(13)