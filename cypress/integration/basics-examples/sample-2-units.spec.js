// Unit testing

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

describe('Unit test match', () => { // describe y context es lo mismo
    context('math', () => {

        it('Sumar numeros', () => { // it y specify es lo mismo
            expect(add(1, 2)).to.eq(3)
        })

        it('Restar numeros', () => {
            expect(subtract(5, 12)).to.eq(-7) // TDD
            assert.equal(subtract(5, 12), -7, 'coincide')

            // https://docs.cypress.io/guides/references/assertions.html#Chai
        })

        specify('Dividir numeros', () => {
            expect(divide(27, 9)).to.eq(3)
        })

        specify('multiplicar numeros', () => {
            expect(multiply(5, 4)).to.eq(20)
        })
    })
})

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'A'
    }

    if (num % 3 === 0) {
        return 'B'
    }

    if (num % 5 === 0) {
        return 'C'
    }
}

describe('Unit Test', () => {
    function numsExpectedToEq(arr, expected) {
        arr.forEach((num) => {
            expect(fizzbuzz(num)).to.eq(expected)
        })
    }

    it('returns "A" when number is multiple of both 3 and 5', () => {
        numsExpectedToEq([15, 30, 60], 'A')
    })

    it('returns "B" when number is multiple of 3', () => {
        numsExpectedToEq([9, 12, 18], 'B')
    })

    it('returns "C" when number is multiple of 5', () => {
        numsExpectedToEq([10, 20, 25], 'C')
    })

})