var online = document.querySelector(".online");
  var offline = document.querySelector(".offline");
  var a = 1;
  var b = 1;
//   document.querySelector(".btn1").addEventListener("click",myFun)
  function myFun() {
    if (a == 1) {
      offline.style.display = "none";
      online.style.display = "block";
      b = 1;
      return b;
    } else if (a == 0) {
      online.style.display = "none";
      offline.style.display = "block";
      a = 1;
      return a;
    }
  }
  function myFun2() {
    if (b == 1) {
      online.style.display = "none";
      offline.style.display = "block";
      a = 1;
      return a;
    } else {
      offline.style.display = "none";
      online.style.display = "block";
      b = 1;
      return b;
    }
  }