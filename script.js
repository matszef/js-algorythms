const randomText = 'hahahaha'

const letterFrequency = (randomText) => {
    
    const frequency = {}

    for (let letter of randomText) {
        if (letter in frequency) {
            console.log(letter)
        }
    }
}

letterFrequency(randomText)

const randomValues = [2, 3, 5, 6, 12, 1, 2, 4, 0, -1, 2, 4]

const maxValue = (randomValues) => {

    let max = randomValues[0]

    for (let value of randomValues) {
        if (value > max) {
            max = value
        }
    }

    return { max }
}


console.log(randomValues)
console.log(maxValue(randomValues))
