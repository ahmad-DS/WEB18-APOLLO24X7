// var list1=document.querySelectorAll("#bottom>div>div");
// var list2=document.querySelectorAll(".popup");
// console.log(popup_list);
// for(var i=0;i<4;i++){
//     list1[i].addEventListener("click",func(){
//         list2[i].style.display="block"
//     })
// }
var cartItems=[
    {
        "id": 4791,
        "sku": "SEB0020",
        "price": 476,
        "special_price": 418,
        "name": "Sebamed Clear Face Care Gel, 50 ml",
        "status": 1,
        "type_id": "FMCG",
        "url_key": "sebamed-clear-face-care-gel-50-ml",
        "is_in_stock": 1,
        "MaxOrderQty": 10,
        "sell_online": true,
        "subcategory": null,
        "image": "/catalog/product/s/e/seb0020.jpg",
        "small_image": "/catalog/product/s/e/seb0020.jpg",
        "thumbnail": "/catalog/product/cache/resized/100x/s/e/seb0020.jpg",
        "is_prescription_required": "0",
        "mou": "1",
        "dc_availability": "Yes",
        "is_express": "No",
        "is_in_contract": "Yes",
        "quantity": 1,
        "isShippable": true,
        "sellingPrice": 418
    },
    {
        "id": 61532,
        "sku": "SEB0100",
        "price": 666,
        "special_price": 587,
        "name": "Sebamed Baby Powder, 200 gm",
        "status": 1,
        "type_id": "FMCG",
        "url_key": "sebamed-baby-powder-200g",
        "is_in_stock": 1,
        "MaxOrderQty": 10,
        "sell_online": true,
        "subcategory": null,
        "image": "/catalog/product/s/e/seb0100.jpg",
        "small_image": "/catalog/product/s/e/seb0100.jpg",
        "thumbnail": "/catalog/product/cache/resized/100x/s/e/seb0100.jpg",
        "is_prescription_required": "0",
        "mou": "1",
        "dc_availability": "Yes",
        "is_express": "No",
        "is_in_contract": "Yes",
        "quantity": 1,
        "isShippable": true,
        "sellingPrice": 587
    },
    {
        "id": 61533,
        "sku": "SEB0115",
        "price": 650,
        "special_price": 530,
        "name": "Sebamed Anti-Hairloss Shampoo, 200 ml",
        "status": 1,
        "type_id": "FMCG",
        "url_key": "seba-med-anti-hairloss-shampoo-200ml",
        "is_in_stock": 1,
        "MaxOrderQty": 10,
        "sell_online": true,
        "subcategory": null,
        "image": "/catalog/product/s/e/seb0115.jpg",
        "small_image": "/catalog/product/s/e/seb0115.jpg",
        "thumbnail": "/catalog/product/cache/resized/100x/s/e/seb0115.jpg",
        "is_prescription_required": "0",
        "mou": "1",
        "dc_availability": "Yes",
        "is_express": "No",
        "is_in_contract": "Yes",
        "quantity": 2,
        "isShippable": true,
        "sellingPrice": 530
    },
    {
        "id": 87349,
        "sku": "SEB0069",
        "price": 1337,
        "special_price": 668.5,
        "name": "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        "status": 1,
        "type_id": "FMCG",
        "url_key": "sebamed-sun-lotion-50-150ml",
        "is_in_stock": 1,
        "MaxOrderQty": 20,
        "sell_online": true,
        "subcategory": null,
        "image": "/catalog/product/m/a/main_31566907052.jpg",
        "small_image": "/catalog/product/m/a/main_31566907052.jpg",
        "thumbnail": "/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
        "is_prescription_required": "0",
        "mou": "1",
        "dc_availability": "Yes",
        "is_express": "No",
        "is_in_contract": "Yes",
        "quantity": 1,
        "isShippable": true,
        "sellingPrice": 668.5
    }
]

displayData(cartItems);

function displayData(data){
    data.forEach(function(element){
        var card=document.createElement("div");
        card.setAttribute("class","card");

        var left=document.createElement("div");
        var leftdiv1=document.createElement("div");
        var thumbnail=document.createElement("img");
        thumbnail.setAttribute("src","https://newassets.apollo247.com/pub/media"+element.small_image);
        thumbnail.style.width="50px";
        thumbnail.style.height="50px";

        console.log(thumbnail);
        leftdiv1.append(thumbnail);



        var leftdiv2=document.createElement("div");
        var h4=document.createElement("h4");
        h4.innerText=element.name;
        var p1=document.createElement("p");
        p1.innerText="(pack of "+element.quantity+")"

        var p2=document.createElement("p");
        p2.innerText="QTY: ";
        leftdiv2.append(h4,p1,p2);
        left.append(leftdiv1,leftdiv2)

        var right=document.createElement("div");
        var del=document.createElement("img");
        del.setAttribute("src","https://newassets.apollo247.com/images/ic_delete.svg");
        var p3=document.createElement("p");
        var n=((+element.price-element.sellingPrice)*100/+element.price).toFixed(2);
        p3.innerText=n+"% off "+" ₹ "+element.price;
        var h3=document.createElement("h3");
        h3.innerText=element.sellingPrice;
        var p4=document.createElement("p");
        p4.innerText="savings ₹"+ (+element.price-element.sellingPrice);
        right.append(del,p3,h3,p4)
        // var numItems=document.createElement("select");
        // var option1=document.createElement("select");


        card.append(left,right);
        console.log(card)
        document.querySelector("#added_items").append(card)

    })
}

// finding total savings


    var savings=cartItems.reduce(function(sum,element){
        return sum+(+element.price-element.sellingPrice)
    },0);
    console.log(savings)
