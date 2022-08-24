// ACTIVITY 3 ------------


const add = (a, b) =>
{
    return a + b;
};
const subtract = (a, b) =>
{
    return a - b;
};
const multiply = (a, b) =>
{
    return a * b;
};
const divide = (a, b) =>
{
    return a / b;
};
const doMaths = (num1) =>
{
    return (num2, fn) =>
    {
        return fn(num1, num2);
    };
};

console.log(doMaths(5)(2, add));

console.log(doMaths(5)(2, subtract));

console.log(doMaths(5)(2, multiply));

console.log(doMaths(5)(2, divide));