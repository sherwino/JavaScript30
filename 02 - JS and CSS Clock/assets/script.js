
const secondHand = document.getElementById('seconds')
const hourHand = document.getElementById('hours')
const minuteHand = document.getElementById('minutes')

function setDate() {
    const now = new Date
    setSeconds(now)
    setMinutes(now)
    setHours(now)
}

function setSeconds(date) {
    const seconds = date.getSeconds() / 60
    secondHand.style.transform = `rotate(${toDegrees(seconds)}deg)`
}

function setHours(date) {
    const hours = date.getHours() / 12
    hourHand.style.transform = `rotate(${toDegrees(hours)}deg)`
}

function setMinutes(date) {
    const minutes = date.getMinutes() / 60
    minuteHand.style.transform = `rotate(${toDegrees(minutes)}deg)`
}

const toDegrees = (unitOfTime => (unitOfTime * 360 ) + 90)

setInterval(setDate, 1000)