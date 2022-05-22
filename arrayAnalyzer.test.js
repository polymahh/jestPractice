import analyzeArray from "./arrayAnalyzer";

const object = analyzeArray([1,8,3,4,2,6]);

test('analyze ninimum',() => {
    expect(object.min).toBe(1)
})

test('analyze ninimum',() => {
    expect(object.max).toBe(8)
})

test('analyze ninimum',() => {
    expect(object.averge).toBe(4)
})

test('analyze ninimum',() => {
    expect(object.length).toBe(6)
})