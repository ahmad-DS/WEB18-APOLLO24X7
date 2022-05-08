
var expand = document.querySelector(".hiddenPart")
expand.addEventListener("click",showRemaining);
function showRemaining(){
    expand.className = ".hideVisibleDiv";
    var sDivs = document.querySelectorAll(".hideDiv");
    for(let i=0 ; i<sDivs.length ; i++){
        sDivs[i].className = ".showHideDiv"
    } 
}
// =====carousel js=====//
var imgIndex = 1;
setInterval(showImage(imgIndex),2000)
;
function imgSlider(n){
    imgIndex += n;
    showImage(imgIndex)
}
function currentSlide(n){
    showImage(n)
}
function showImage(n){
    var images = document.querySelectorAll(".carousel_image");
    if(n<1){
        imgIndex = images.length;
        n = images.length;
    }else if(n>images.length){
        imgIndex=1;
        n=1;
    }
    for(var i=0 ; i<images.length ; i++){
        images[i].style.display ="none";
    }
    images[n-1].style.display ="block";
}
// =====taking name via prompt function===== //
// var name = prompt("what is your name");
// if (name == "") {
//   name = "There";
// }

// name.style.borderBottomWidth = "2px";
// name.style.borderBottomColor = "green";
// name.style.borderBottomStyle = "solid";
var signupdetailarr = JSON.parse(localStorage.getItem("signupdetaildata"))
var lastotp =JSON.parse(localStorage.getItem("lastotp"))
console.log(lastotp)
var firstname = lasname(signupdetailarr)
function lasname(signupdetailarr){
    signupdetailarr.forEach(function(el){
        if(el.otp ==lastotp){
            document.getElementById("displayname").innerText="Hello " + el.firstname +"!"
            document.querySelector("#name").innerText=el.firstname
            document.querySelector("#mobnumber").innerText=el.number
        }
    })
}

function showpop(){

        document.querySelector(".popup").classList.add("visblecontent")
        document.querySelector("#logout").style.cursor="pointer"
      
      
}
function closearr(){
    document.querySelector(".popup").classList.remove("visblecontent")
  }