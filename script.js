// console.log("Hello!");
// console.log("Hello!");
alert("Tamim");

// age = prompt("What is your name?");
// document.write(age);

// document.getElementById("first-para").innerHTML = "This is changed";

// Numbers

// var num = 12;
// num = num + 1;
// num++;
// document.write(num);

// num1 = 12;
// document.write(num1);

// var remainder = 12 % 5;
// document.write(remainder);

// function hello(){
//     var name = prompt("What is your name?");
//     var result = "Hello !" + " " + name;
//     document.write(result);
// }

// hello();

// It will print (Hi Tamim) for 100 time
// var n = 0;
// while(n < 100){
//     n += 1;
//     document.write("Hi Tamim");
// }

// It will print 1 to 100
// var n = 0;
// while(n < 100){
//     n += 1;
//     document.write(n);
// }

// It will print (Hi Tamim) for 101 time
// for(var a = 0; a <= 100; a ++){
//     document.write("Hi Tamim");
// }

// It will print 0 to 100
// for(var a = 0; a <= 100; a ++){
//     document.write(a);
// }

// It will show the number of length of the word
// var string = "TamimAhmedBiplob";
// document.write(string.length);

// It will show you the index of the letter
// var string = "TamimAhmed";
// document.write(string.indexOf("A"));

// It will show you the letters from a upto b
// var string = "TamimAhmed";
// document.write(string.slice(3 , 9));        // Where a=3 and b=9

// It will replace the letter/word from a to b
// var string = "TamimAhmed";
// document.write(string.replace("Ahmed" , "Molla"));        // Where a="Ahmed" and b="Molla"

// It will replace all the letter of the word to upper case
// var string = "TamimAhmed";
// document.write(string.toUpperCase());

// It will replace all the letter of the word to lower case
// var string = "TamimAhmed";
// document.write(string.toLowerCase());

// It will show you the letter of the selected index
// var string = "TamimAhmed";
// document.write(string.charAt(4));
// or
// document.write(string[4]);

// It will show you the word letter by letter
// var string = "TamimAhmed";
// document.write(string.split(""));        // split by character

// It will show you the word
// var string = "TamimAhmed";
// document.write(string.split(" , "));    // split by comma

// It will show you the word
// var string = "TamimAhmed , BiplobMolla";
// document.write(string.split(" , "));    // For clear

// It will show you the index of the word
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// document.write(string.indexOf("Molla"));

// It will remove the first word from the array
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// string.shift();
// document.write(string);

// It will delete your last array
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// string.pop();
// document.write(string);

// It will change the value of your array
// var a = ["Tamim","Biplob","Molla","Ahmed"];
// a[2] = "Mollah";
// document.write(a[2]);

// It will delete your particular array
// var a = ["Tamim","Biplob","Molla","Ahmed"];
// delete a[2];
// document.write(a);

// It will re-arrange your arrays by alfabate
// var a = ["Tamim","Biplob","Molla","Ahmed"];
// a.sort();
// document.write(a);

// It will reverse your array
// var a = ["Tamim","Biplob","Molla","Ahmed"];
// a.reverse();
// document.write(a);

// It will add the word you writen in the push() after your last array
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// string.push("MySelf");
// document.write(string);

// It will add the writen word in unshift() in the first of the array
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// string.unshift("Tamim Ahmed");
// document.write(string);

// It will add the writen word in concat() with the
// var a = ["Tamim","Biplob","Ahmed","Molla"];
// var b = a.concat("Tamim Ahmed");
// document.write(b);
// or
// var a = ["Tamim","Biplob","Ahmed","Molla"];
// var b = ["Tamim Ahmed","Biplob Molla"];
// var c = a.concat(b);
// document.write(c);

// It will make a new array taken those who are passed the condition
// var ages = [19,20,17,21,16,28,18];
// var b = ages.filter(checkAdult);
// document.write(b);
// function checkAdult(age){
//    return age >= 18;
// }

// It will show the word written in the fill() in replace all of the arrays
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// string.fill("Tamim Ahmed");
// document.write(string)

// It will convert all of the arrays into on array
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// var a = string.join("-");
// document.write(a);

// It will delete and replace the word by index number writen on the first parameter
// var string = ["Tamim","Biplob","Ahmed","Molla"];
// string.splice(2,0,"Ahammed");
// document.write(string);

// var a = 12;
// if(Array.isArray(a)){
//     document.write("<h1>This is Array.</h1>");
// }else{
//     document.write("<h1>This is not Array.</h1>");
// }

// document.querySelector("#first-para").style.color = "red";
// document.querySelector("#first-para").style.border = "solid 30px";
// document.querySelector("#first-para").style.outline = "solid 30px green";
// document.querySelector("#first-para").style.padding = "30px";

// document.getElementById("btn").onmouseenter = background;
// function background(){
//     document.getElementById("btn").style.backgroundColor = "green";
// }
// or
// document.getElementById("btn").addEventListener("click",background);
// function background(){
//     document.getElementById("btn").style.backgroundColor = "green";
// }
// or
// document.getElementById("btn").addEventListener("click",function background(){
//     document.getElementById("btn").style.backgroundColor = "green";
// });

// var a = {
//     fname : "Tamim",
//     lname : "Ahmed",
//     age : 19,
//     address : {
//         "Village" : "Zirabo",
//         "PostOffice" : "Zirabo",
//         "PoliceStation" : "Ashulia"
//     },
//     salary : function(){
//         return 25000;
//     },
//     fullName : function(){
//         return this.fname + " " + this.lname;
//     }
// }

// document.write(a.address.Village);

// var obj = {
//     fname : "Tamim",
//     lname : "Ahmed",
//     age : 19
// };
// for(var key in obj){
//     document.write(obj[key] + " ");
// }

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getTime();

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getFullYear();

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getMonth();

// var d = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.getElementById("demo").innerHTML = months[d.getMonth()];

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDate();
// or
// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDay();

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getHours();

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getMinutes();

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getSeconds();

// var d = new Date();
// d.setMonth(11);
// d.setDate(29);
// document.getElementById("demo").innerHTML = d;

// document.write(Math.PI);
// document.write(Math.E);
// document.write(Math.SQRT2);
// document.write(Math.SQRT1_2);
// document.write(Math.LN2);
// document.write(Math.LN10);
// document.write(Math.ceil(3.2));
// document.write(Math.floor(4.5));
// document.write(Math.round(4.6));
// document.write(Math.round(4.4));
// document.write(Math.trunc(4.8));
// document.write(Math.max(4,8,4,3,5));
// document.write(Math.min(35,53,24,56,21));
// document.write(Math.sqrt(9));
// document.write(Math.cbrt(27));
// document.write(Math.pow(2,3));
// document.write(Math.random());
// document.write(Math.floor(Math.random() * 10));
// document.write(Math.abs(-5s));

// document.getElementsByTagName("section")
// document.querySelector("section").addEventListener("mouseenter" , function(){
//     document.querySelector("section").style.backgroundColor = "green";
// })

// var ary = [1,4,6,2,6];
// var arry = ary.map(function(x){
//     return x*10;
// });
// document.write(arry);

// var ary = [
//     {fname : "Tamim" , lname : "Ahmed"},
//     {fname : "Biplob" , lname : "Molla"},
//     {fname : "Rasel" , lname : "Rana"},
// ];
// var obj = ary.map(function(x){
//     return x.fname + " " + x.lname + "<br>";
// });
// document.write(obj);

// var a = "JavaScript is a mother Language. It is very nice.";
// document.write(a.match(/is/g));

// var a = "JavaScript is my favourite language";
// document.write(a.replace("JavaScript","PHP"));

// var a = "Hello Bangladesh ";
// document.write(a.concat("Tamim"));

// var a = "JavaScript is my favourite language";
// document.write(a.split("a"));

// var a = "Tamim";
// document.write(a.repeat(10));

// document.querySelector("section").addEventListener("click" , abc);
// function abc(){
//     document.querySelector("section").style.backgroundColor = "green";
// }
// document.querySelector("button").addEventListener("click" , xyz);
// function xyz(){
//     document.querySelector("section").removeEventListener("click" , abc);
// }

