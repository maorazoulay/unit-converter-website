let numInput = document.getElementById("num-input")
const convertButton = document.getElementById("convert-btn")

let lengthNums = document.getElementById("length-nums")
let volumnNums = document.getElementById("volume-nums")
let massNums = document.getElementById("mass-nums")

const meterFeetRatio = 3.281
const literGallonRatio = 0.264
const KilogramPoundRatio = 2.204

convertButton.addEventListener("click", function () {
    let value = numInput.value
    if (!value || isNaN(value)){
        value = 0
    }
    let lengthObj = computeLength(value)
    let volumeObj = computeVolume(value)
    let massObj = computeMass(value)

    render(value, lengthObj, volumeObj, massObj)
})

function computeLength(value) {
    const feet = (Number(value) * meterFeetRatio).toFixed(3)
    const meters = (Number(value) / meterFeetRatio).toFixed(3)
     
    let conversion = {
        meters: meters,
        feet: feet
    }

    return conversion
}

function computeVolume(value) {
    let gallon = (Number(value) * literGallonRatio).toFixed(3)
    let liter = (Number(value) / literGallonRatio).toFixed(3)

    let conversion = {
        liter: liter,
        gallon: gallon
    }

    return conversion
}

function computeMass(value) {
    let pound = (Number(value) * KilogramPoundRatio).toFixed(3)
    let kilogram = (Number(value) / KilogramPoundRatio).toFixed(3)

    let conversion = {
        kilogram: kilogram,
        pound: pound
    }

    return conversion
}

function render(value, length, volume, mass){
    const lengthString = `${value} meters = ${length.feet} feet | ${value} feet = ${length.meters} meters`
    const volumeString = `${value} liters = ${volume.gallon} gallons | ${value} gallons = ${volume.liter} liters`
    const massString = `${value} kilos = ${mass.pound} pounds | ${value} pounds = ${mass.kilogram} kilos`

    lengthNums.innerHTML = lengthString
    volumnNums.innerHTML = volumeString
    massNums.innerHTML = massString
}

window.computeLength = computeLength
window.computeVolume = computeVolume
window.computeMass = computeMass
window.render = render

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/