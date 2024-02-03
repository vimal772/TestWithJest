export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export function reverseStr(msg) {
    return msg.split('').reverse().join('')
}

export class Calculator {
    constructotr() {
    
    }

    add(a,b) {
        return a+b
    }

    sub(a,b) {
        return a-b
    }

    div(a,b) {
        return a/b
    }

    mul(a,b) {
        return a*b
    }
}

export function ceaserCipher(str,key) {
    let i=0
    let msg = ''
    if(key<0) return new Error('Negative Key Value')
    while(i<str.length) {
        let charCode = str.charCodeAt(i)
        if(charCode >= 97 && charCode <= 122) {
            charCode = ((charCode-97 + key)%26 +26) %26 +97
        } else if(charCode >= 65 && charCode <= 90) {
            charCode = ((charCode-65+key)%26 +26)%26 +65
        } else {
            charCode
        }
        msg = msg + String.fromCharCode(charCode)
        i++
    }
    return msg
}

export function analyzeArray(numArr) {
    function findAverage(Arr) {
        if(Arr.length === 0) throw new Error('Not an Array')
        let total = 0
        for(let i=0;i<Arr.length;i++) {
            total += Arr[i]
        }
        let avg = total / Arr.length
        return avg
    }

    function findMin(numArr) {
        if(numArr.length === 0) throw new Error('Not an Array')
        return Math.min(...numArr)
    }

    function findMax(numArr) {
        if(numArr.length === 0) throw new Error('Not an Array')
        return Math.max(...numArr)
    }

    return {
        average: findAverage(numArr),
        min: findMin(numArr),
        max: findMax(numArr),
        length: numArr.length
    }
}