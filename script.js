

//a
let monthNumber = parseInt(prompt("1-ден 12-ге дейін сан енгізіңіз:"));

switch (monthNumber) {
    case 1:
    case 2:
    case 3:
        alert("Winter");
        break;
    case 4:
    case 5:
    case 6:
        alert("Spring");
        break;
    case 7:
    case 8:
    case 9:
        alert("Summer");
        break;
    case 10:
    case 11:
    case 12:
        alert("Autumn");
        break;
    default:
        alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз");
}











//b

let a = parseFloat(prompt("Бірінші санды енгізіңіз:"));
let b = parseFloat(prompt("Екінші санды енгізіңіз:"));

if (a > b) {
    alert("a саны b санынан үлкен");
} else if (a < b) {
    alert("a саны b санынан кіші");
} else {
    alert("Сандар тең");
}

let average = (a + b) / 2;
alert("Орташа мән: " + average);




//c
let num1 = parseFloat(prompt("Бірінші санды енгізіңіз:"));
let num2 = parseFloat(prompt("Екінші санды енгізіңіз:"));
let num3 = parseFloat(prompt("Үшінші санды енгізіңіз:"));

let largest = Math.max(num1, num2, num3);
let smallest = Math.min(num1, num2, num3);
let difference = largest - smallest;

alert("Ең үлкен және ең кішкентай санның айырмасы: " + difference);









