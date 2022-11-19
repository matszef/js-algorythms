// const randomText = 'mateusz szefler'

// const letterFrequency = (randomText) => {
    
//     const frequency = {}

//     for (let letter of randomText) {
//         if (letter in frequency) {
//             frequency[letter] = frequency[letter] + 1
//         } else {
//             frequency[letter] = 1
//         }
//     }
// }

// letterFrequency(randomText)

// const randomValues = [2, 3, 5, 6, 12, 1, 2, 4, 0, -1, 2, 4]

// const maxValue = (randomValues) => {

//     let max = randomValues[0]

//     for (let value of randomValues) {
//         if (value > max) {
//             max = value
//         }
//     }

//     return { max }
// }


// console.log(randomValues)
// console.log(maxValue(randomValues))

const text = "Mateusz Szefler"

// const wordReverse = (text) => {
//     console.log(text)
//     const splittedText = text.split('').reverse().join('')
//     return splittedText
// }

console.log(text)

const reverseString = (text) => {
    //split text
    let splitText = ''

     for (let i = text.length - 1; i >= 0; i--) {
        splitText += text[i]
    }

    console.log(splitText)

    

    //reverse text
    


    //join
}

console.log(reverseString(text))

