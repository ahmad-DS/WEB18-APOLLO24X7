// var list1=document.querySelectorAll("#bottom>div>div");
// var list2=document.querySelectorAll(".popup");
// console.log(popup_list);
// for(var i=0;i<4;i++){
//     list1[i].addEventListener("click",func(){
//         list2[i].style.display="block"
//     })
// }
// 
var cartItems=JSON.parse(localStorage.getItem("addtocart"))||[];


// var selected = 1;
displayData(cartItems);

function displayData(data) {
    document.querySelector("#added_items").innerHTML = "";
    document.querySelector("#total_items").innerText=data.length;
    document.querySelector("#cart_logo_top").innerText=data.length;

    data.forEach(function (element,index) {
        var card = document.createElement("div");
        card.setAttribute("class", "card");

        var left = document.createElement("div");
        left.style.display = "flex";

        var leftdiv1 = document.createElement("div");
        var thumbnail = document.createElement("img");
       
        thumbnail.setAttribute("src", element.product_img);
        thumbnail.style.width = "50px";
        thumbnail.style.height = "50px";
        // console.log(thumbnail);
        leftdiv1.append(thumbnail);



        var leftdiv2 = document.createElement("div");
        var h4 = document.createElement("h4");
        h4.innerText = element.product_pname;
        var p1 = document.createElement("p");
        p1.innerText = "(quantity added " + element.product_quantity + ")"


        var inner_div = document.createElement("div");
        inner_div.style.border = "1px solid green"
        inner_div.style.display = "inline";
        inner_div.innerText = "QTY: ";
        // creating select tag for changing quantity of an item
        var select = document.createElement("SELECT");

        // adding event listener to select tag to change no of quantity of a product



        var shakil=document.createElement("option");
        shakil.value="";
        shakil.innerText="choose quantity";
        select.add(shakil)
        select.style.border = "0px"
        for (var i = 1; i <= 10; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerText = i;
            // if (selected == i) {
            //     opt.setAttribute("selected", "true")
            // }
            select.add(opt);
        }
        inner_div.append(select);

        leftdiv2.append(h4, p1, inner_div);
        left.append(leftdiv1, leftdiv2)

        var right = document.createElement("div");
        var del = document.createElement("img");
        del.addEventListener("click",function(){
            
            cartItems.splice(index,1);
            localStorage.setItem("addtocart",JSON.stringify(cartItems))
            displayData(cartItems);
            totalSavings();
            totalAmount();
            payableAmount()
            // localStorage.set
        })
        del.setAttribute("class","delete")
        del.setAttribute("src", "https://newassets.apollo247.com/images/ic_delete.svg");
        var p3 = document.createElement("p");
        // var n = ((+element.price - element.sellingPrice) * 100 / +element.price).toFixed(2);
        var n=element.product_discount;
        var span1 = document.createElement("span");
        span1.innerText = n + "% off ";
        span1.style.color = '#00B38E';
        span1.style.marginRight = "5px";
        var span2 = document.createElement("span");
        span2.setAttribute("class", "oldPrice")
        // ***
        span2.innerText = " ₹ " + (+element.product_orgprice*element.product_quantity).toFixed(2);
        span2.style.textDecoration = "line-through";

        p3.append(span1, span2);
        var h3 = document.createElement("h3");
        h3.setAttribute('class', 'currentPrice')
        h3.style.color = "#01475b"
        // ***
        h3.innerText = "₹" + (element.product_actprice*element.product_quantity).toFixed(2);
        var p4 = document.createElement("p");
        // ****
        p4.innerText = "savings ₹" + ((+element.product_orgprice- element.product_actprice) * element.product_quantity).toFixed(2);
        right.append(del, p3, h3, p4)
        // var numItems=document.createElement("select");
        // var option1=document.createElement("select");
        select.addEventListener("change", function () {
            console.log(h3);
            h3.innerText = "Shakil";
            changeQuantity(element)
            localStorage.setItem("addtocart",JSON.stringify(cartItems))
        });

        card.append(left, right);
        // console.log(card)
        document.querySelector("#added_items").append(card)

    })
}
// finding indivisual product total cost
// function products

// finding total savings
totalSavings();
function totalSavings(){
var savings = cartItems.reduce(function (sum, element) {
    return sum + (+element.product_orgprice - element.product_actprice) * element.product_quantity;
}, 0);
console.log(savings);

document.getElementById("saving_amount").innerText = "₹" + savings.toFixed(2);
}
// finding total payable amount
totalAmount();
function totalAmount(){
var total_amount = cartItems.reduce(function (sum, element) {
    return sum + (+element.product_actprice)*element.product_quantity
}, 0);
console.log(total_amount);

document.getElementById("cart_total").innerText = "₹" + total_amount.toFixed(2);
}

// calculating payable Amount
payableAmount()
function payableAmount(){
    var dc=document.querySelector("#dc").innerText;
    var total_amount = cartItems.reduce(function (sum, element) {
        return sum + (+element.product_actprice)*element.product_quantity
    }, 0);
    console.log(typeof(dc),typeof(total_amount))
    var toPay=total_amount-dc;
    document.querySelector("#payable_amount").innerText="₹"+toPay;
    localStorage.setItem("subtotal",toPay);

}



function changeQuantity(element) {

    var qty = event.target.value;

    console.log(element)
    element.product_quantity = qty;

    selected = qty
    displayData(cartItems);
    totalSavings();
    totalAmount();
    payableAmount()
    

}

// adding event listener to logo image of company;
document.querySelector(".logo").addEventListener("click",function(){
    window.location.href="../after_login.html"
})

// adding event lstener to go to payment button;
document.querySelector("#address_btn").addEventListener("click",function(){
    window.location.href="../SHIVANI-THAKUR/payment.html"
})


// var payable_amount=localStorage.setItem("subtotal",payable_amount);
// localStorage
