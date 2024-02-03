import { capitalize,reverseStr,Calculator } from './cofeFile.js'

test('check for truthy', () => {
    expect(capitalize("Hello")).toBeTruthy()
})

test('First letter Check', () => {
    expect(capitalize("hi")).toBe('Hi')
})

test('capitalzing', () => {
    expect(capitalize("vimal")).not.toBe("VIMAL")
})

test('checks for truthy', () => {
    expect(reverseStr('hello')).toBeTruthy()
})

test('reversed', () => {
    expect(reverseStr('vimal')).toBe('lamiv')
})

test('test for Object', () => {
    const calc = new Calculator
    expect(typeof calc).toBe('object')
})

test('adds', () => {
    const calc = new Calculator()
    expect(calc.add(1,2)).toBe(3)
})

test('sub', () => {
    const calc = new Calculator()
    expect(calc.sub(7,2)).toBe(5)
})

test('division', () => {
    const calc = new Calculator()
    expect(calc.div(6,2)).toBe(3)
})

test('multiply', () => {
    const calc = new Calculator()
    expect(calc.mul(1,2)).toBe(2)
})