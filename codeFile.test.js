import { capitalize } from './cofeFile.js'

test('check for truthy', () => {
    expect(capitalize("Hello")).toBeTruthy()
})

test('First letter Check', () => {
    expect(capitalize("hi")).toBe('Hi')
})

test('capitalzing', () => {
    expect(capitalize("vimal")).not.toBe("VIMAL")
})