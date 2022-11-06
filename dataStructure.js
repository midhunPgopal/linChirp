let array = [1, 3, 4, 6, 7, 8]
let result = []
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0)
        result.push(array[i])
}
console.log(result);

let string = 'Elie'
let splitString = string.split('')
for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] == 'a' || splitString[i] == 'e' || splitString[i] == 'i' || splitString[i] == 'o' || splitString[i] == 'u') {
        splitString[i] = splitString[i].toUpperCase()
    }
}
string = splitString.join('')
console.log(string);

let array3 = [1, 3, 4, 6, 7, 8, 2, 5]
let max = 0;
array3.forEach(item => {
    if (item > max)
        max = item
})
console.log('maximum is : ' + max);