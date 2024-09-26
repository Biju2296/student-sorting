function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Example Usage
const expenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 80 }
];

const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses); // Output should be: 205

// Additional Test Cases

// Test with an empty array
const emptyExpenses = [];
console.log(calculateTotalExpenses(emptyExpenses)); // Output should be: 0

// Test with a single expense
const singleExpense = [{ name: "Rent", amount: 500 }];
console.log(calculateTotalExpenses(singleExpense)); // Output should be: 500

// Test with multiple expenses including zeros
const mixedExpenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 0 },
    { name: "Entertainment", amount: 20 },
    { name: "Groceries", amount: 80 }
];
console.log(calculateTotalExpenses(mixedExpenses)); // Output should be: 150

// Test with negative expenses (if applicable)
const negativeExpenses = [
    { name: "Refund", amount: -50 },
    { name: "Food", amount: 100 }
];
console.log(calculateTotalExpenses(negativeExpenses)); // Output should be: 50
