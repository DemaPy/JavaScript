let strArr = "(())}}{{".split('')

let brackets = {
    setState: (bracket) => {
        brackets.brackets[bracket].count++
    },
    brackets: {
        "(": {
            count: 0,
            pair: ')'
        },
        "{": {
            count: 0,
            pair: '}'
        },
        "[": {
            count: 0,
            pair: ']'
        },
        ")": {
            count: 0,
        },
        "}": {
            count: 0
        },
        "]": {
            count: 0
        },
    }
}

function countPairs(arr, cb) {
    count(arr)
    cb(brackets.brackets)
}


function count(arr) {
    arr.forEach(elem => {
        if (elem in brackets.brackets) {
            brackets.setState(elem)
        }
    })
}

function isBracketsHasPair(bracketsArr) {
    for (let bracket in bracketsArr) {
        if (bracketsArr[bracket].pair) {
            console.log(`Bracket: ${bracket} has count: ${bracketsArr[bracket].count}, and pair bracket: ${bracketsArr[bracket].pair} has count ${bracketsArr[bracketsArr[bracket].pair].count}`);
            if (bracketsArr[bracket].count !== bracketsArr[bracketsArr[bracket].pair].count) {
                console.error(`Error, bracket ${bracket} doesn't have a pair.`);
            }
        }
    }
}

countPairs(strArr, isBracketsHasPair)
