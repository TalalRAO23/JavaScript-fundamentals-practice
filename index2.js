console.log('Hello World');

// let a=2;
// let b=2;
// let c=2;

function sum(a,b,c){
    console.log(a+b+c);
}

sum(5,7,10);

greet = (name) =>{console.log('Hello '+name+'!');
}

greet('talal');
greet('hamza');
greet('huda');

const calc = (a,b,c) =>{
    return{
        sum: a+b+c,
        sub: a-b-c,
        div: a/b/c,
        prod: a*b*c
    };
}

let result = calc(20, 10, 5);
console.log(result);

const age = 18;

if(age <18){
    console.log('You are not allowed');
}

else if(age> 18){
    console.log('You are eligible');
    
}
else{
    console.log('You are exactly 18');
    
}

let x =1;
while (x <= 5) {
    console.log(x);
    x++;
}


let password = 'facebook26';

while(password !== 'facebook25'){
    console.log('Wrong password try again.');
    
}

let name = prompt("Enter your name");
alert("Your name is "+name);

let name = 'talal';

do{
    console.log(name);
}
while(name!== 'talal');

let num = [1,2,3,4,5,6,7,8,9,10]
for(let val of num){
    console.log(val);
    
}


let student ={
    name: "talal",
    age: 21,
    gender: "male",
    courses: ['pf', 'dld', 'dsa']
}

console.log(student.name);
console.log(student.age);
console.log(student.gender);
console.log(student.courses[0]);
console.log(student.courses[1]);
console.log(student.courses[2]);


console.log(student["name"]);
console.log(student["age"]);
console.log(student["gender"]);



for(let key in student){
    console.log(key+": ", student[key]);
}

console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

student.uni = "NUML";
console.log(student);
delete student.age;
console.log(student);

let arr = [1,18,3,4,5,6,7,8,9,10];
arr.splice(1, 5);
arr.splice(1,0,2.1)
console.log(arr);
arr.splice(1,1,2)
console.log(arr);

let array = ['red', 'blue', 'yellow', 'green'];
console.log(array);
array.splice(1,1,'purple');
console.log(array);

const welcome = (name) =>  "Hello "+ name +"!";
console.log(welcome("yasir"));

const multiply = (p1, p2, p3) => { prod = p1 *p2 *p3;
    return prod;
};

console.log(multiply(5,5,5));


let cars = {
    name:"bmw",
    color: 'blue',
    price: 20000
}

console.log(cars.name);
console.log(cars.color);
console.log(cars.price);

console.log(cars["name"]);
console.log(cars["color"]);
console.log(cars["price"]);

for(let key in cars){
    console.log(key,": ", cars[key]);
    
}

let arr = [1,2,3,4,5,6,7,8,9,10];

let even = arr.filter(function eve(num){
    return num > 5;
});

for(let val of arr){
    console.log(val);
    
}

// console.log(even);



let student ={
    name: "talal",
    age: 23,
    gender: "male",
    greet: function(){
        return "Hello from "+this.name;
    }
}

console.log(student.greet());
console.log(student.name);
console.log(student.age);
console.log(student.gender);


for(let key in student){
    console.log(student[key]);
    
}
