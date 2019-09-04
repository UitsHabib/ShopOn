// slides for all departments
var slidesDepartment1 = document.getElementById('department1').getElementsByClassName("col-sm-3"); 
var slidesDepartment2 = document.getElementById('department2').getElementsByClassName("col-sm-3"); 
var slidesDepartment3 = document.getElementById('department3').getElementsByClassName("col-sm-3"); 
var slidesDepartment4 = document.getElementById('department4').getElementsByClassName("col-sm-3"); 
var slidesDepartment5 = document.getElementById('department5').getElementsByClassName("col-sm-3"); 
var slidesDepartment6 = document.getElementById('department6').getElementsByClassName("col-sm-3"); 
var slidesDepartment7 = document.getElementById('department7').getElementsByClassName("col-sm-3"); 
var slidesDepartment8 = document.getElementById('department8').getElementsByClassName("col-sm-3"); 
	


// begin and end for all departments
var beginDepartment1 = 0, endDepartment1 = 3; 
var beginDepartment2 = 0, endDepartment2 = 3;
var beginDepartment3 = 0, endDepartment3 = 3; 
var beginDepartment4 = 0, endDepartment4 = 3;
var beginDepartment5 = 0, endDepartment5 = 3; 
var beginDepartment6 = 0, endDepartment6 = 3;
var beginDepartment7 = 0, endDepartment7 = 3; 
var beginDepartment8 = 0, endDepartment8 = 3;


// initially show all images
showSlides(beginDepartment1, endDepartment1, slidesDepartment1);
showSlides(beginDepartment2, endDepartment2, slidesDepartment2);
showSlides(beginDepartment3, endDepartment3, slidesDepartment3);
showSlides(beginDepartment4, endDepartment4, slidesDepartment4);
showSlides(beginDepartment5, endDepartment5, slidesDepartment5);
showSlides(beginDepartment6, endDepartment6, slidesDepartment6);
showSlides(beginDepartment7, endDepartment7, slidesDepartment7);
showSlides(beginDepartment8, endDepartment8, slidesDepartment8);

// all functions to move images
function plusSlidesDepartment1(n) {
	if(beginDepartment1 == 0 && n==-1) {}
	else if(endDepartment1 == slidesDepartment1.length - 1 && n==1) {}
	else {
		beginDepartment1 += n;
		endDepartment1 += n;
	} 
	showSlides(beginDepartment1, endDepartment1, slidesDepartment1);
}

function plusSlidesDepartment2(n) {
	if(beginDepartment2 == 0 && n==-1) {}
	else if(endDepartment2 == slidesDepartment2.length - 1 && n==1) {}
	else {
		beginDepartment2 += n;
		endDepartment2 += n;
	} 
	showSlides(beginDepartment2, endDepartment2, slidesDepartment2);
}

function plusSlidesDepartment3(n) {
	if(beginDepartment3 == 0 && n==-1) {}
	else if(endDepartment3 == slidesDepartment3.length - 1 && n==1) {}
	else {
		beginDepartment3 += n;
		endDepartment3 += n;
	} 
	showSlides(beginDepartment3, endDepartment3, slidesDepartment3);
}

function plusSlidesDepartment4(n) {
	if(beginDepartment4 == 0 && n==-1) {}
	else if(endDepartment4 == slidesDepartment4.length - 1 && n==1) {}
	else {
		beginDepartment4 += n;
		endDepartment4 += n;
	} 
	showSlides(beginDepartment4, endDepartment4, slidesDepartment4);
}

function plusSlidesDepartment5(n) {
	if(beginDepartment5 == 0 && n==-1) {}
	else if(endDepartment5 == slidesDepartment5.length - 1 && n==1) {}
	else {
		beginDepartment5 += n;
		endDepartment5 += n;
	} 
	showSlides(beginDepartment5, endDepartment5, slidesDepartment5);
}

function plusSlidesDepartment6(n) {
	if(beginDepartment6 == 0 && n==-1) {}
	else if(endDepartment6 == slidesDepartment6.length - 1 && n==1) {}
	else {
		beginDepartment6 += n;
		endDepartment6 += n;
	} 
	showSlides(beginDepartment6, endDepartment6, slidesDepartment6);
}

function plusSlidesDepartment7(n) {
	if(beginDepartment7 == 0 && n==-1) {}
	else if(endDepartment7 == slidesDepartment7.length - 1 && n==1) {}
	else {
		beginDepartment7 += n;
		endDepartment7 += n;
	} 
	showSlides(beginDepartment7, endDepartment7, slidesDepartment7);
}

function plusSlidesDepartment8(n) {
	if(beginDepartment8 == 0 && n==-1) {}
	else if(endDepartment8 == slidesDepartment8.length - 1 && n==1) {}
	else {
		beginDepartment8 += n;
		endDepartment8 += n;
	} 
	showSlides(beginDepartment8, endDepartment8, slidesDepartment8);
}



// function to show slides
function showSlides(b, e, x) {
	var i;  
	for (i = 0; i < x.length; i++) {
		if(i>=b && i<=e) x[i].style.display = "block";
		else x[i].style.display = "none";  
	}	 
}