// loops

document.write("While loop <br>");

var i=0;

while (i<=100) {
	document.write(i + "<br>");
	i= i+5;
}

// do while loop

document.write(" do...While loop <br>");

var i=0;

do {
	document.write(i + "<br>");
	i= i+5; //incermenting
} while (i<=100);

// for loop

for (var i=0; i <=100; i++){
	document.write(i + " <br> ");
}

//symbol
for (var i=0; i <10; i++){
	document.write("*" + " <br> ");
}

for (var i=0; i <10; i++){
	document.write("*" + " ");
}

// 
document.write("<br>");

var star = "#";
for  (var j=0; j<3; j++){ // to produce 3 lines of stars
	for (var i=0; i<5; i++){//to rpoduce a line of stars
		document.write(star + " ");
	}
	document.write("<br>");
}


document.write("<br>");