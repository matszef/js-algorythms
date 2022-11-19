const people = [
    {name: 'Matt', age: 31},
    {name: 'Joe', age: 18},
    {name: 'Ernie', age: 41},
    {name: 'Ed', age: 31},
    {name: 'Steve', age: 18},
    {name: 'Wioleta', age: 31},
    {name: 'Hue', age: 41},
    {name: 'Mitch', age: 39},
]

const res = people.reduce((groupedPeople, person) => {
    if (groupedPeople[person.age] == null) groupedPeople[person.age] = []
    groupedPeople[person.age].push(person)
    return groupedPeople
}, {})
