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
            while ((operators.length >= 1) && (precedence[operators[operators.length - 1]] > precedence[infix_list[el]])) {
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
        postfix_string += postfix_list[c] + " "
    }
    return postfix_string
}

let strin = conversion("A+B*C/D")

console.log(strin)

// function calculation(postfix_list) {
//     let postfix_list = new conversion()

// }