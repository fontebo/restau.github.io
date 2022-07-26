"use strict";

function closenav() {
    document.getElementById("resp_nav").style.width = "0px";
    // document.getElementById("resp_nav").style.display = "none";
}
function opennav(){
    document.getElementById("resp_nav").style.width = "100%";
    document.getElementById("resp_nav").style.display = "block";
}
window.onload = function(){
    var date = new Date;
    var day = date.getDay();
    var time = date.getHours();
    if ((day == 6 || day==7)){
        document.getElementById("deliv_all").display = "block";
    }else{
        document.getElementById("deliv_all").display = "none";
    }
    if(time > 16 || time < 8){
        document.getElementById("deliv_all").display = "block";
    }else{
        document.getElementById("deliv_all").display = "none";
    }
}
function getTableNum(){
    if(window.prompt("Enter you table number")){
        window.confirm("Thank you for ordering. Your order is on its way");
    }
    else{
        window.prompt("Please enter your valid table Number");
    }
    
}
// console.log(document.getElementById("resp_nav").attributes);
// var links = document.getElementById("navlinks");
// var links_con = links.getElementsByClassName("link");

// for (var i=0;i<links_con.length;i++){
//     links_con[i].addEventListener("click",function(){
//         var current = document.getElementsByClassName("link");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

// window.onscroll = function(){
//     if(document.body.scrollTop>=204.125||document.documentElement.scrollTop>=204.125){
//         document.getElementById("nav").style.position = "absolue";
//         document.getElementById("nav").style.top = 0;
//     }else{
//         document.getElementById("nav").style.position = "static";
//         document.getElementById("nav").style.height = "100px";
// }
// }