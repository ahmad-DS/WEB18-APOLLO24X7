
var expand = document.querySelector(".hiddenPart")
expand.addEventListener("click",showRemaining);
function showRemaining(){
    expand.className = ".hideVisibleDiv";
    var sDivs = document.querySelectorAll(".hideDiv");
    for(let i=0 ; i<sDivs.length ; i++){
        sDivs[i].className = ".showHideDiv"
    } 
}
var imgIndex = 1;
showImage(imgIndex);
function imgSlider(n){
    imgIndex += n;
    // console.log(imgIndex,"b",n)
    showImage(imgIndex)
    // console.log(imgIndex,"a",n)

}
function currentSlide(n){
    // imgIndex = n;
    showImage(n)
}
function showImage(n){
    var images = document.querySelectorAll(".carousel_image");
    // console.log(images)
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