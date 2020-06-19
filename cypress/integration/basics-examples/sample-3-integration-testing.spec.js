// Unit testing

function A(a, b, n) {
    var add = a + b;
    return B(add, n)
}

function B(add, n) {
    var multiply = add * n;
    return C(multiply, n)
}

function C(multiply, n) {
    var divide = multiply / n;
    return divide;
}



describe('Unit test', () => {

    it('Sumar numeros', () => {
        expect(A(1, 2, 5)).to.eq(3)
    })

    it('multiplicar numeros', () => {
        
        expect(B(3, 5)).to.eq(3)
    })

    it('multiplicar numeros', () => {
        expect(C(15, 5)).to.eq(3)
    })

})
