let i9 = 1;
let sum9 = 0;
let count = 0;
let digit9 = parseInt(prompt("Завдання 9. Введіть натуральне число:"))
while ( i9 <= digit9) {
    if ( digit9 % i9 === 0 ) {
        if (i9 % 2 === 0) {
            document.write(i9 + ", ");
            count++;
            sum9 += i9;
        }
    }
    i9++;
}
document.write("<br>")
document.write("Кількість парних дільників від 1 до " + digit9 + " становить - " + count + "<br>");
document.write("Сума парних чисел від 1 до " + digit9 + " становить - " + sum9 + "<br>");
