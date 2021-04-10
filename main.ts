envirobit.onClap(function () {
    envirobit.setLEDs(envirobit.OnOff.On)
    if (envirobit.waitForDoubleClap(1000)) {
        if (compteur == 0) {
            radio.sendNumber(7)
            compteur += 1
        } else {
            radio.sendNumber(8)
            compteur = 0
        }
        basic.pause(100)
        envirobit.setLEDs(envirobit.OnOff.Off)
    }
})
let compteur = 0
radio.setFrequencyBand(40)
radio.setGroup(22)
compteur = 0
