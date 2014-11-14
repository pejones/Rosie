function clickMe()
{
alert("I was clicked");
}
function clickMe2()
{
alert("I was clicked again");
}

var t1=document.getElementById("headline");
var s1=document.getElementById("content");
/*
t1.onclick=clickMe;
s1.onclick=clickMe;

t1.addEventListener('click',clickMe);
s1.addEventListener('click',clickMe2);
*/

if(t1.addEventListeners){
alert("The addEventListener Exists");
}else {
alert("The addEventListener does not exist")
}


function myFunction(){
        document.getElementById('demo2').innerHTML="Creek creek";
        // document.write(Date());  // shoves it output that overides all html elements - so just the output
        // console.log("ok then");  //shoves it out to the console
        
}

function changeImage(){
var image=document.getElementById('myImage');
if (image.src.match("bulbon")){
        image.src='pic_bulboff.gif';
        } else {
        image.src='pic_bulbon.gif';
        }
}

function myFunction2(){
var x=document.getElementById('demo3');
x.style.fontSize="25px";
x.style.color="red";
}

function car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

car1 = new car("Eagle", "Talon TSi", 1993, rand)
car2 = new car("Nissan", "300ZX", 1992, ken)








