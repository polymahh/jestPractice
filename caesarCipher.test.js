
import caesarCipher from './caesarCipher'

test('dycipher',() => {
    expect(caesarCipher('aBC',7)).toBe('hIJ')
})

test('dycipher',() => {
    expect(caesarCipher('abc',7)).toBe('hij')
})

test('dycipher',() => {
    expect(caesarCipher('abc!',7)).toBe('hij!')
})