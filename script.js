
console.log("      task1");
let d = 7;
console.log(d);
console.log(d**2);
console.log(d**3);

console.log("      task2");

let int = +prompt("enter one number please");
if(int>=0){
    console.log(int*2);  
}
console.log("      task3");

let int1 = +prompt("enter first number please");
let int2 = +prompt("enter second number please");
if(int1>int2){
    console.log(int1 + int2);
}
else if(int1<int2){
    console.log(int1 * int2); 
}
else{
    console.log(" числа одинаковые");
}
console.log("      task4");

let int3 = +prompt("enter one intiger number please");
if(int3<0){
    console.log(int3**2);  
}
else{
    console.log("false");
}
console.log("      task5");

let numstu = +prompt("enter the number of students in the class");
let numcha = +prompt("enter the number of chairs in the class");
if(numstu<=numcha){
    console.log("enough chairs");
}
else{
    console.log("not enough chairs");
}
console.log("      task6");


let simplenum = "(start, ";
for (let i = 1; i <= 9; i++) {
    simplenum += i + ", ";
}
simplenum += "finish)";
console.log(simplenum);

console.log("      task7");
for (let i = 1; i <=99; i++){
    if (i % 5 == 0){
        console.log(i);
    }
}
console.log("      task8");
let arr = [3, 6, 45, 54, 67, 15, -3, -15, 0];
for (let num = 0; num < arr.length; num++){
    if (arr[num] >= 15){
    console.log(arr[num]);
}
}
console.log("      task9");
for (let i = 1; i <= 99; i++){
    if (i % 2  != 0){
        console.log(i);
    }
}
console.log("      task10");
let arr1 = [3, 6, 45, 54, 67, 15, -3, -15, 0, 54, 784, 333, -99];
for (let num = 0; num < arr1.length; num++){
    if (num % 3 == 0){
    console.log(arr1[num]);
}
}
console.log("****postSCRIPTum*************************************************");
console.log("Спасибо за внимание и потраченное на меня время! я этого не забуду...");