// const todos = [
//     {
//         id: 1,
//         text: 'teke out trash',
//         isCompleted: true,
//         name: 'Richard'
//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isCompleted: true,
//         name: 'Bob'
//     },
//     {
//         id: 3,
//         text: 'dentist appt',
//         isCompleted: false,
//         name: 'Jack'
//     }
// ];

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// };

// for (let todo of todos) {
//     console.log(todo.name);
// }

// todos.forEach((todo) => console.log(todo.text));

// const todoText = todos.map(function (todo) {
//     return todo.text;
// });

// console.log('-------------------------------');

// console.log(todoText);

// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === false;
// }).map(function (todo) {
//     return todo.text;
// });

// console.log(todoCompleted);

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
