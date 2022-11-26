 
// ------------------CHANGING CASE--------------------
// --------------<Q1>...............

// var namea=prompt("Enter a name");
// namea=namea.toLocaleLowerCase( );
// console.log(namea);

// Strings: measuring length and extracting parts
// --------------<Q1>...............
//  var phone=prompt('Enter a phone number');
//  var total=phone.length;
// document.write(total);
// --------------<Q2>...............

// var a=phone.slice(10);
// console.log(a);

// Strings: finding segments
// --------------<Q1>...............
// var pak="pakistan";
// var a=pak.indexOf('n');
// document.write(a);

// --------------------- CHAPTER 31-34 -----------------------------------------

// //------->Q1
// var rightNow = new Date();
// document.write(rightNow);
// document.write("<br>");


// //------->Q2
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var nowmomth = new Date();
// var curmonth = nowmomth.getMonth();
// alert("Current Month : "+months[curmonth]);


// //------->Q3
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var nowday = new Date();
// var currday = nowday.getDay();
// alert("Today is : "+days[currday]);


// //------->Q4
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var nowday = new Date();
// var currday = nowday.getDay();
// if(currday==days["Sunday"] || currday == days["Saturday"] ){
// document.write("Its Fun Day");
// }
// else{
//     document.write("Today is : "+days[currday]);
//     document.write("<br>");
// }


// //-------> Q5
// var currdate = new Date();
// var viewdate = currdate.getDate();
// if(viewdate < 16){
//     document.write("First fifteendays of the month");
//     document.write("<br>");
// }
// else{
//     document.write("Last days of the month");
//     document.write("<br>");
// }

// //-------> Q6
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var difference = Todaymilli - todayMin;
// var diffmin = difference/(1000*60*60);
// var accmin = Math.floor(diffmin);
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970 : " + accmin)


// //-------> Q7 
// var time = new Date();
// var t = time.getHours();
// var t2 = time.getMinutes();
// if(t<12 && t2<=59){
//     document.write("<br> Its AM!");
// }
// else{
//     document.write("<br> Its PM!")
// }
// //document.write("<br>"+t+" : "+t2);


// //-------> Q8
// var laterDate = new Date();
//  laterDate.setMonth(11);
//  laterDate.setYear(2020);
//  laterDate.setHours(00);
//  laterDate.setMinutes(00);
// laterDate.setSeconds(00);
//  laterDate.setDate(31);
// document.write("<br>"+laterDate);

// //-----> Q9
// var ramadandate = new Date();
// ramadandate.setYear(2015);
// ramadandate.setMonth(4);
// ramadandate.setDate(18);
// var currentdate = new Date();
// currentdate.setYear(2022);
// currentdate.setMonth(3);
// currentdate.setDate(2);
// var passeddays =( currentdate - ramadandate)/(1000*60*60*24);
// document.write("<br>"+passeddays+" days have Passed since 1st Ramadan 2015.");

// //------> Q10
// var referencedate = new Date();
// referencedate.setMonth(0);
// referencedate.setDate(1);
// referencedate.setYear(2015);
// referencedate.setHours(00);
// referencedate.setMinutes(00);
// var cdate = new Date();
// cdate.setMonth(10);
// cdate.setDate(25);
// cdate.setYear(2022);
// cdate.setHours(20);
// cdate.setMinutes(42);
// var sec = (cdate - referencedate)/1000 
// document.write("<br>"+sec+" seconds had passed since beginning of 2015");

// //------> Q11
// var d = new Date();
// document.write("<br>Current Time : "+d);
//  d.setHours(d.getHours()-1);
// document.write("<br>1 hour ago it was : "+d);



// //------>Q12

// var d2 = new Date();
// document.write("<br> Current Time : "+d2);
// d2.setYear(d2.getFullYear()-100);
// document.write("<br> 100 year back it was : "+d2);


// //------->Q13

// var bdate = new Date();
// var curryear = bdate.getFullYear();
// var age = prompt("Enter Your Age : ");
// var birthday = curryear - age;
// document.write("<br>Your Birthday Year is : "+birthday);

// //------> Q14

// var months1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var customerName = "Abdullah";
// var billmonth = new Date();
// var bm = months1[billmonth.getMonth()];
// var Number_of_Unit = 450;
// var charges_per_unit = 10;
// var net_amount_payable = Number_of_Unit * charges_per_unit ;
// var late_amount_surcharge = 350;
// var Gross_Amount_Payable = net_amount_payable + late_amount_surcharge ;
// document.write( "<br><br> K-Electric Bill");
// document.write("<br><br> Customer Name : "+customerName);
// document.write("<br> Month : "+bm);
// document.write("<br> Number Of Unit : "+Number_of_Unit);
// document.write("<br> Charges per Unit : "+charges_per_unit);
// document.write("<br><br>");
// document.write("<br>  Net Amount Payable (within Due Date) : "+net_amount_payable);
// document.write("<br> Late Payment Surcharge : "+late_amount_surcharge);
// document.write("<br> . Gross Amount Payable (after Due Date) : "+Gross_Amount_Payable);



// -------------------- CHAPTER 35 - 38 ---------------------------

// // -------- Q1

// var crtime = new Date();
// document.write("<br><br>"+crtime);


// // ------ Q2

// var fname,lname;
// function userfullname(fname,lname){
   
//     fname = prompt("Enter first Name : ");
//     lname = prompt("Enter Last Name : ");
//     return fname+lname;
// }

// document.write("<br> Full Name : "+userfullname(fname,lname)); 

// // ---------- Q3

// var n1,n2;
// n1 = +prompt("Enter First Number : ");
// n2= +prompt("Enter Second Number  : ");
// function sum(n1,n2){
//     return (n1+n2);
// }
// document.write("<br> Sum is : ",sum(n1,n2));

// // ------ Q4

// var num1,num2,operator;
// num1 = +prompt("Enter 1st Number : ");
// num2 = +prompt("Enter 2nd Number : ");
// operator = prompt("Enter Operation (+,-,*,/) : ");

// function calculator(num1,num2,operator){
// if(operator=="+"){
//     return(num1+num2);
// }
// else if(operator=="-"){
//     return(num1-num2);
// }
// else if(operator=="/"){
//     return(num1/num2);
// }
// else if (operator=="*"){
//     return(num1*num2);
// }
// else{
//     document.write("<br>invalid");
// }

// }
// document.write("<br> Answer : ",calculator(num1,num2,operator));

// // ----------Q5

// var a = +prompt("Enter Number for Square : ");
// function sq(a){
//     return (a*a);
// }
// document.write("<br> Square is : ",sq(a));

// // -------- Q6

// var n =+prompt("Enter Number for Factorial : ") ;

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   answer = factorial()
//   document.write("<br>The factorial of " + n + " is " + answer);

 

//   // -------- Q8

//   var base = +prompt("Enter Value of Base " );
//   var perp = +prompt("Enter value of Perpendicular : ");
//    var hyp;
//   function calhyp(hyp){
//     function calbase(base){
//         return (base*base);
    
//     }
//     function calperp(perp){
//         return  (perp*perp);
         
//     }
//     return (calbase(base)+calperp(perp));
//    }
// document.write("<br> Hypotenuse^2 is : ",calhyp(hyp));

// // ---------- Q9

// var height = +prompt("Enter Value of Height " );
//   var width = +prompt("Enter value of width : ");
//   function areaofrect(height,width){
//     return (height*width);
//   }
//   document.write("<br> Area of Rectangle : ",areaofrect(height,width));

//   // ------------- Q 14
//   var radius = +prompt("Enter Value of Radius for Circumference of Circle : ");

//   function circumferenceofcircle(radius){
//     return(2*3.142*radius);
//   }
//   document.write("<br> Circumference of Circle : ",circumferenceofcircle(radius));

//   var radius1 = +prompt("Enter Radius for Area of Circle : ");
//   function areaofcircle(radius1){
//     return(3.142*radius1*radius1);
//   }
//   document.write("<br> Area of Circle : ",areaofcircle(radius1));