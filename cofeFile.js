export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export function reverseStr(msg) {
    return msg.split('').reverse().join('')
}