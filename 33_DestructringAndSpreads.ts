
let input = [2,3]

// v1
// let first:number = input[0]
// let last:number = input[1]

// v2 : destructring
let [first, second] = input
alert(first + " " + second)

// let [n1, ...rest] = [2,3,4,5,6]
let [n1, n2, ...rest] = [2,3,4,5,6]
alert(n1)
alert(rest)

// Dates
// let [totalDate, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2017-07-01')
let [totalDate, year, month, day] = /^(\d\d\d\d)-\d\d-(\d\d)$/.exec('2017-07-01')
alert(totalDate + " " + year + " " + month + " " + day)


// DESTRUCTRING OBJECT

let o = {
    a: "foo",
    b: 12,
    c: "bar"
}