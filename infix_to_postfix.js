function conversion(infix) {
    let precedence = {
        "(": 1,
        "/": 2,
        "*": 3,
        "+": 4,
        "-": 5,
    }

    let operators = []
    let postfix_list = []
    let infix_list = infix.split(" ")

    for (let el in infix_list) {
        if (infix_list[el].match(/^[A-Za-z0-9]*$/)) {
            postfix_list.push(infix_list[el])
        } else if (infix_list[el] === "(") {
            operators.push(infix_list[el])
        } else if (infix_list[el] === ")") {
            let top = operators.pop()
            while (top !== ")") {
                postfix_list.push(top)
                top = operators.pop()
            }
        } else if (infix_list[el].match(/^[/*+-]*$/)) {
            while ((operators.length >= 1) && (precedence[operators[operators.length - 1]] < precedence[infix_list[el]])) {
                postfix_list.push(operators.pop())
            }
            operators.push(infix_list[el])
        }
    }

    while (operators.length >= 1) {
        postfix_list.push(operators.pop())
    }
    let postfix_string = ""
    for (let c in postfix_list) {
        if (c > postfix_list.length - 2) {
            postfix_string += postfix_list[c]
        } else postfix_string += postfix_list[c] + " "
    }
    return postfix_string
}

// let strin = conversion("A + B * C / D")

// console.log(strin)

function calculation(postfix_string) {

    let operand_list = []
    let token_list = postfix_string.split(" ")

    for (let ch in token_list) {
        if (token_list[ch].match(/^[0-9]*$/)) {
            operand_list.push(token_list[ch])
                //console.log(`BEFORE MATH: ${operand_list}`)
        } else {
            let left = parseFloat(operand_list.pop())
            let right = parseFloat(operand_list.pop())
            let result = calc(token_list[ch], right, left)
                //console.log(result)
            operand_list.push(result)
                //console.log(`AFTER MATH: ${operand_list}`)
        }
    }
    return operand_list.pop()
}

function calc(operator, left_op, right_op) {
    switch (operator) {
        case "*":
            return left_op * right_op
            break;
        case "/":
            return left_op / right_op
            break;
        case "-":
            return left_op - right_op
            break;
        case "+":
            return left_op + right_op
            break;

        default:
            console.log("No operator avilable")
            break;
    }
}

// let expres = conversion("( 8 + 5 ) - 3 * 6")
// console.log(expres)
// console.log(calculation(expres))