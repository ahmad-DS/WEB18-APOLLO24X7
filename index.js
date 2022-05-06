
var expand = document.querySelector(".hiddenPart")
expand.addEventListener("click",showRemaining);
function showRemaining(){
    expand.className = ".hideVisibleDiv";
    var sDivs = document.querySelectorAll(".hideDiv");
    for(let i=0 ; i<sDivs.length ; i++){
        sDivs[i].className = ".showHideDiv"
    } 
}