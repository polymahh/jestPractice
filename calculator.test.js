
import calculator from "./calculator";

test('addition', ()=> {
    expect(calculator.add(1,2)).toBe(3)
})

test('substraction', ()=> {
    expect(calculator.substract(1,2)).toBe(-1)
})

test('devision', ()=> {
    expect(calculator.devide(6,2)).toBe(3)
})

test('multiply', ()=> {
    expect(calculator.multiply(6,2)).toBe(12)
})