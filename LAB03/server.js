const connect = require('connect');
const url = require('url');

// Math calculation function
function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;
    let symbol;

    if (isNaN(x) || isNaN(y)) {
        res.end("Error: x and y must be valid numbers.");
        return;
    }

    switch (method) {
        case 'add':
            result = x + y;
            symbol = '+';
            break;
        case 'subtract':
            result = x - y;
            symbol = '-';
            break;
        case 'multiply':
            result = x * y;
            symbol = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.end("Error: Division by zero.");
                return;
            }
            result = x / y;
            symbol = '/';
            break;
        default:
            res.end("Error: Invalid method. Use add, subtract, multiply, or divide.");
            return;
    }

    res.end(`${x} ${symbol} ${y} = ${result}`);
}

// Create and start the server
const app = connect();
app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/lab3');
});
