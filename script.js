// JavaScript Fundamentals

// Declare variables
let message = "Hello, World!";
let number = 42;
let isTrue = true;

// Define functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Use console.log() to print output
console.log(message);
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(divide(6, 3)); // 2
console.log(multiply(4, 3)); // 12

// DOM Manipulation
function performOperations() {
    // Get values from input fields
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
        return;
    }

    // Perform operations
    let sum = add(num1, num2);
    let diff = subtract(num1, num2);
    let prod = multiply(num1, num2);
    let quot = num2 !== 0 ? divide(num1, num2) : 'undefined (division by zero)';

    // Display results
    document.getElementById('result').innerHTML = `
        Sum: ${sum} <br>
        Difference: ${diff} <br>
        Product: ${prod} <br>
        Quotient: ${quot}
    `;
}
 
function createChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to create the chart
createChart();
