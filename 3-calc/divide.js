module.exports = function (a, b) {  
    if (b === 0 || b === '0') {
        return 'Error: Division by zero'
    }
    return a / b
}   