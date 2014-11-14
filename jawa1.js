function fnHideShow(which){
//alert("Element id is " + which.style.display + " ok");
if (!document.getElementById)
  return
if (which.style.display=="block")
  which.style.display="none";
else
  which.style.display="block";
}
function fnHideShow1(which){
//alert("Element id is " + which.style.display + " ok");
if (!document.getElementById)
  return
if (which.style.display=="none")
  which.style.display="block";
else
  which.style.display="none";
}

function fnHideShow2(which2){
//alert("Element id is " + which2.style.display + " and " + which2.style.visibility + " ");
if(!document.getElementById)
  return
if (which2.style.visibility=="visible")	{
  //alert("In if section");
  which2.style.visibility="hidden"; 
  }
else{
  //alert("In else section");
  which2.style.visibility="visible";
  }
}

function fnMyFunction(){
var age,voteable;
age=document.getElementById("age1").value;
voteable=(age < 18) ? "Too young" : "Old enough";
//document.getElementById("demo1").innerHTML=voteable + " to vote";
p1=document.getElementById("demo1");
p1.innerHTML=voteable + " to Vote";
//document.getElementById("demo1").innerText=voteable + " to Vote";
//alert("voteable vv is " + voteable + " and the age vv is " + age);
}

function fnHighLevel(){
//  alert(document.forms[0].elements[0]);
//var f=document.fmA;
var f=document.forms["fmA"];
var e=document[];
//for(var i=0;i < f.elements.length; i++){
for(var i=0;i < e.elements.length; i++){
alert(e.elements[i].value);
alert(e.elements[i]);
}
//alert(me);
}

function myFunction3(){
  //document.getElementById('para1').innerHTML="Creek creek";
  var b1=document.getElementById('para1');
  b1.innerHTML=location.href + " " + location.pathname + "\n" + screen.height; 
  //b1.innerHTML="In the main section now";   	       
  b1.style.color="pink";	
  var p1=document.getElementById('header');
  var p2=document.getElementById('mainSection');
  var p3=document.getElementById('tdL');
  var p4=document.getElementById('tdR');
  var p5=document.getElementById('wholePage');
  var p6=document.getElementById('headerTitle');
  p1.style.display='block';	
  p3.style.display='none';	
  //p6.style.display='none';	
  //p5.style.display='none';	
  //p4.style.display='none';	
  //p2.style.display='block';	
}

function myFunction2(){
  var x=document.getElementById('demo3');
  x.style.fontSize="25px";
  x.style.color="red";
}
