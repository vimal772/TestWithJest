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