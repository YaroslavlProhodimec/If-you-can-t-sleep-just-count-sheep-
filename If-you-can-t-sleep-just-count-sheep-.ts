const countSheep = (num) => {
if(num === 0) return ''
    let str = ''
    for (let i = 1; i <= num; i++) {

        str +=  `${i} sheep...`

    }
    return str
}

console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))