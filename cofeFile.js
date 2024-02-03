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