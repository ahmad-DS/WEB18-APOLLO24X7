var online = document.querySelector(".online");
  var offline = document.querySelector(".offline");
  var a = 1;
  var b = 1;
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

  // data for covid consulation
  var dataOfDoctors_covid = [{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Viny Kantroo",
    specialist: "covid consult",
    price: "Rs 1200/-",
    exp: "12 YRS EXP",
    language: "Hindi",
    location: "South Delhi",
    qualification: "DNB Resp, Diseases, MRCP",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg"
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Venkatakarthikeyan C",
    specialist: "Covid consult",
    price: "Rs 1000/-",
    exp: "18 YRS EXP",
    language: "English, Hindi, Tamil",
    location: "Chennai",
    qualification:"MS, DNB",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg"
},
{
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr Sravani Kuppam",
    specialist: "covid consult",
    price: "Rs 900/-",
    exp: "8 YRS EXP",
    language: "English, Hindi, Telgu, Kannada",
    location: "Banglore",
    qualification: "MBBS",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg"
},
{
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. Sahana Gangatkar",
    specialist: "covid consult",
    price: "Rs 1200/-",
    exp: "6 YRS EXP",
    language: "English, Hindi, Kannada",
    location: "Banglore",
    qualification: "MBBS, MD",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg"
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Prof. Sureh Singh Naruka",
    specialist: "covid consult",
    price: "Rs 1200/-",
    exp: "13 YRS EXP",
    language:"English, Hindi, Russian",
    location: "South Delhi",
    qualification: "MBBS (Medicine)",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg"
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Rajesh Chawla",
    specialist: "Covid consult",
    price: "Rs 1000/-",
    exp: "30 YRS EXP",
    language: "English, Punjabi, Hindi",
    location: "South Delhi",
    qualification: "MD FCCM, FCCP, EDIC",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg"
}]

dataOfDoctors_covid.forEach(function(el){
  var mainBox = document.createElement("div"); // done
  mainBox.className="mainBox";
  var subBox1 = document.createElement("div"); // done
  subBox1.className="subBox1";
  var subBox2 = document.createElement("div"); // done
  subBox2.className="subBox2";
  var doctorImg = document.createElement("img"); // done
  doctorImg.src=el.doctorImg;
  var subBox3 = document.createElement("div"); // done
  subBox3.className="subBox3";
  var name = document.createElement("h4"); // done
  name.innerText=el.name;
  var specialist = document.createElement("h4"); // done
  specialist.innerText=el.specialist;
  var exp = document.createElement("p"); // done
  exp.innerText=el.exp;
  var qualification=document.createElement("p"); // done
  qualification.innerText=el.qualification;
  var subBox5 = document.createElement("div"); // done
  subBox5.className="subBox5";
  var subBox4 = document.createElement("div"); // done
  subBox4.className="subBox4";
  var price = document.createElement("strong"); // done
  price.innerText=el.price;
  var subBox6 = document.createElement("div"); // done
  subBox6.className="subBox6";
  var languageLogo = document.createElement("img"); // done
  languageLogo.src=el.languageLogo;
  var language=document.createElement("p"); // done
  language.innerText = el.language;
  var subBox7 = document.createElement("div");
  subBox7.id = "box"; // done
  subBox7.className="subBox6";
  var locationLogo = document.createElement("img");
  locationLogo.src = el.locationLogo;
  var location = document.createElement("p");
  location.innerText=el.location;
  
  
  subBox5.append(subBox4);
  subBox1.append(subBox2, subBox3);
  subBox3.append(name, specialist,exp, qualification);
  subBox2.append(doctorImg);
  subBox6.append(languageLogo, language);
  subBox4.append(price);
  mainBox.append(subBox1, subBox5, subBox6, subBox7);
  subBox7.append(locationLogo, location);
  document.querySelector(".covid").append(mainBox);
  
})

// Data for Dermatology Doctor list
var dataOfDoctors_dermatology = [
  {
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. Rajyalaxmi Konathan",
    specialist: "DERMATOLOGIST",
    exp: "22 YRS EXP",
    language: "English, Hindi, Telgu, Kannada",
    location: "Hyderabad",
    price: "Rs 1200/-",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    qualification: "MD, MBBS",
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Kapil Arora",
    specialist: "DERMATOLOGIST",
    exp: "9 YRS EXP",
    language: "English, Hindi",
    price: "Rs 1000/-",
    location: "Noida",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    qualification: "MD, MBBS"
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Vasudevan",
    specialist: "DERMATOLOGIST",
    exp: "8 YRS EXP",
    language: "English",
    location: "Chennai",
    price: "Rs 1100/-",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    qualification: "MD, MBBS"
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Anshul Warman",
    specialist: "DERMATOLOGIST",
    exp: "16 YRS EXP",
    language: "English, Gujrat, Hindi",
    location: "Ahmedabad",
    price: "Rs 1050/-",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    qualification: "MBBS, MD(Derma)",
},
{
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. S Madhuri",
    specialist: "DERMATOLOGIST",
    exp: "8 YRS EXP",
    language: "English, Hindi, Telgu",
    location: "Hyderabad",
    price: "Rs 950/-",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    qualification: "MBBS, MD(DVL)",
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Abhijna Rai",
    specialist: "DERMATOLOGIST",
    exp: "8 YRS EXP",
    language: "English, Hindi, Kannada",
    location: "Banglore",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1250/-",
    qualification: "MBBS, MD - Dermatology"
}]

localStorage.setItem("Dermatology", JSON.stringify(dataOfDoctors_dermatology))


// Data for general physician
var dataOfDoctors_generalPhysician = [
  {
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. Safi Naaz",
    specialist: "GENERAL PHYSICIAN / INTERNAL MEDICINE specialist",
    exp: "30 YRS EXP",
    language: "English, Arbic, Bengali",
    location: "Hyderabad",
    price: "Rs 1150/-",
    qualification: "MD(Gen. Med.)",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",

},
{
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. Anusuya Shetty",
    specialist: "GENERAL PHYSICIAN / INTERNAL MEDICINE SPECIALIST",
    exp: "15 YRS EXP",
    language: "Kannada, Tamil, Hindi, Telgu, English",
    location: "Banglore",
    qualification: "MBBS, DNB",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price:"1550",
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Aakash Andgi",
    specialist: "GENERAL PHYSICIAN / INTERNAL MEDICINE SPECIALIST",
    exp: "3 YRS EXP",
    language: "English, Hindi, Kannada",
    location: "Banglore",
    qualification: "MBBS, MD",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 850/-"
},
{
    doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
    name: "Dr. Deven Shah",
    specialist: "GENERAL PHYSICIAN / INTERNAL MEDICINE",
    exp: "9 YRS EXP",
    language: "English",
    location: "Ahmedabad",
    qualification: "MBBS DNB",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1250/-"
},
{
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. Shakti",
    specialist: "GENERAL PHYSICIAN / INTERNAL MEDICINE SPECIALIST",
    exp: "23 YRS EXP",
    language: "English, Hindi",
    location: "South Delhi",
    qualification: "MBBS DNB",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price:"Rs 950/-"
},
{
    doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
    name: "Dr. Akila Mani",
    specialist: "DIABETOLOGIST",
    exp: "20 YRS EXP",
    language: "English, Tamil",
    location: "Chennai",
    qualification: "MBBS, MRCP",
    languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 750/-"
}]

localStorage.setItem("Physician", JSON.stringify(dataOfDoctors_generalPhysician));

var dataOfDoctors_paediatrics = [
{
  doctorImg: "https://newassets.apollo247.com/images/ic-mascot.png",
  name: "Dr. Hemant Lahoti",
  specialist: "PAEDIATRIC SURGEON",
  exp: "16 YRS EXP",
  language: "English, Hindi, Marathi",
  location: "Mumbai",
  qualification: "MBBS, MS, MCh",
  languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1250/-",
},
{
  doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
  name: "Dr. Smita Malhotra",
  specialist: "PAEDIATRIC SURGEON",
  exp: "15 YRS EXP",
  language: "English, Hindi, Punjabi",
  location: "South Delhi",
  qualification: "MBBS, DNB(Paediatrics)",
  languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 950/-"
},
{
  doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
  name: "Dr. Deepa Sharma",
  specialist: "PAEDIATRIC SURGEON",
  exp: "20 YRS EXP",
  language:"English, Hindi",
  location: "South, Delhi",
  qualification: "MBBS, DCH, DNB",
  languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1350/-"
},
{
  doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
  name: "Dr. Prita Trehan",
  specialist: "PAEDIATRIC SURGEON",
  exp: "47 YRS exp",
  language: "English, Hindi",
  location: "South Delhi",
  qualification: "MBBS, MD(Paediatrics)",
  languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1300/-",
},
{
  doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
  name: "Dr. Sharmila Pendyala",
  specialist: "PAEDIATRIC SURGEON",
  exp: "15 YRS exp",
  language: "English, Hindi, Telgu",
  location: "Hyderabad",
  qualification: "MBBS, MD(Paediatrics)",
  languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1150/-",
},
{
  doctorImg: "https://newassets.apollo247.com/doctors/noimagefemale.png",
  name: "Dr. Vidya Gupta",
  specialist: "PAEDIATRIC SURGEON",
  exp: "30 YRS exp",
  language: "English, Hindi",
  location: "South Delhi",
  qualification: "MBBS, MRCP",
  languageLogo: "https://newassets.apollo247.com/images/language.svg",
    locationLogo: "https://newassets.apollo247.com/images/new-location.svg",
    price: "Rs 1000/-"
}]

localStorage.setItem("Paediatrics", JSON.stringify(dataOfDoctors_paediatrics));

// document.querySelector(".logo").addEventListener("click",function(){
//   window.location.href="after_login.html"
// })