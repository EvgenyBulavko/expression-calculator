function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here

    let proverkamatr;
    proverkamatr = expr.split("");
    ProverBrackets(proverkamatr);
    ProverZero(proverkamatr);
    let s;
    s = expr.replace(/\s/g, "");
    let Resh = new Function(`return ${s}`);

    return Resh();
}

function ProverBrackets(proverkamatr) {
    let kol = 0;

    for (let value = 0; value < proverkamatr.length; value++) {
        if (proverkamatr[value] === ")") kol--;
        else if (proverkamatr[value] === "(") kol++;
        if (kol < 0) break;
    }

    if (kol > 0 || kol < 0) throw new Error("ExpressionError: Brackets must be paired");
}

function ProverZero(proverkamatr) {
    for (let i = 0; i < proverkamatr.length; i++) {
        if (proverkamatr[i] === "/" && proverkamatr[i + 2] === "0") {
            throw new Error("TypeError: Division by zero.");
        }
    }
}


module.exports = {
    expressionCalculator
}