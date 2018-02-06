document.write("Eu sunt JS");
document.getElementById("primulDiv").style.background = 'green';


/*
Acesta 
este 
un 
comentariu
*/

//Acesta tot este un comentariu


/***********/
var x = 2;
var y = 3;

var suma = x + y;

document.write("Suma = " + suma);

console.log("Suma = " + suma);
/***********/
var m, n = 5;
  
suma = m + m;

console.log("Suma = " + suma);
/***********/
var i = "3", j = 5;
  
suma = parseInt(i) + j;

console.log("Suma3 = " + suma);

var k = 0;

if(k > 0){
	console.log("Numar pozitiv");
}else if(k < 0){
	console.log("Numar negativ");
}else{
	console.log("Zero");
}


n = 20;

for (var i = 1; i <= n; i++) {
	console.log(i);
}

var i = 1;
while ( i <= n) {
	console.log(i);
	i++;
}

var i = 1;
do{
	console.log(i);
	i++;
}while ( i <= n);