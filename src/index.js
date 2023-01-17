module.exports = function check(str, bracketsConfig) {
    const bracketsPairs = bracketsConfig.reduce((acc, elem) => {
        return { ...acc, [elem[1]]: elem[0] }
    }, {})

    const stack = []

    for (let i = 0; i < str.length; i++) {
        const currentSymbol = str[i]

        if (stack.length && stack[stack.length - 1] === bracketsPairs[currentSymbol]) {
            stack.pop()
        } else {
            stack.push(currentSymbol)
        }
    }

    return stack.length === 0

}
