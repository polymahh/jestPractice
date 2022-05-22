
import { capitalize, reveseString } from "./stringManipulation";

test('the first string chart ti upperCase',()=> {
    expect(capitalize('this')).toBe('This')
})

test('revese String', ()=> {
    expect(reveseString('rest')).toBe('tser')
})