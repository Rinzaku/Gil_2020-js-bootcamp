import {suma, diff} from '../calc'
import sumCasesTest from './calc.sum.testcases.json'
import diffCasesTest from './calc.diff.testcases.json'

test('3 + 6 should be 9', () => {
    expect(suma(3,6)).toBe(9)
})
test('3 + 6 should not be 6', () => {
    expect(suma(3,6)).not.toBe(6)
})

test('3 - 6 should be -3', () => {
    expect(diff(3,6)).toBe(-3)
})

for (let i = 0; i < sumCasesTest.length; i++) {
    // const element = sumCasesTest[i];
    test(`${sumCasesTest[i].number1} + ${sumCasesTest[i].number2} should be ${sumCasesTest[i].expect}`, () => {
        expect(
            suma(sumCasesTest[i].number1,sumCasesTest[i].number2)
        ).toBe(sumCasesTest[i].expect)
    })
    
}

for (let i = 0; i < diffCasesTest.length; i++) {
    // const element = sumCasesTest[i];
    test(`${diffCasesTest[i].number1} - ${diffCasesTest[i].number2} should be ${diffCasesTest[i].expect}`, () => {
        expect(
            diff(diffCasesTest[i].number1,diffCasesTest[i].number2)
        ).toBe(diffCasesTest[i].expect)
    })
    
}