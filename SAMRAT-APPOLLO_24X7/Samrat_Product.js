
       var ShopByHealthCondition_data=[
        {
        sbhc_img:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
        sbhc_p:"COVID Care"
        },
    {
        sbhc_img:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
        sbhc_p:"COVID Protection"
    },
    {
        sbhc_img:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
           sbhc_p:"Diabetes Care"       
 
    },
    {
        sbhc_img:"https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
         sbhc_p: "Mind care"         
     },
    {
        sbhc_img:"https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
         sbhc_p: "Liver Care"  
    },
    {
     sbhc_img:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
     sbhc_p: "Cardiac"
    }
 
 ]
        
        ShopByHealthCondition_data.forEach(function(el){
 
         var div_sbhcfinal=document.createElement("div")
         
         var sbhcavtar = document.createElement("img")
         sbhcavtar.src = el.sbhc_img
   
         var sbhcname=document.createElement("p")
         sbhcname.innerText = el.sbhc_p
      
        
         div_sbhcfinal.append(sbhcavtar,sbhcname)
         document.querySelector("#sam_shopbyhealthcondition").append(div_sbhcfinal)
        })
  
        var sebamed_data=[
        {
            product_disimg:"discount.jpg",
            product_discount:"-18%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0115.jpg",
            product_pname:"Sebamed Anti-Hairloss Shampoo,200ml",
            product_sign:"MRP",
            product_price:"(Rs 650)",
            product_disprice:"Rs 530",
            product_circle:"circle.jpg",
            product_cashback:"₹32 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"650",
            product_actprice:"530",
            product_cb:"32",


        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-11%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0100.jpg",
            product_pname:"Sebamed Baby Powder,200 gm",
            product_sign:"MRP",
            product_price:"(Rs 666)",
            product_disprice:"Rs 587",
            product_circle:"circle.jpg",
            product_cashback:"₹35 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"666",
            product_actprice:"587",
            product_cb:"35",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-12%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0020.jpg",
            product_pname:"Sebamed Clear Face Care Gel,50ml",
            product_sign:"MRP",
            product_price:"(Rs 476)",
            product_disprice:"Rs 418",
            product_circle:"circle.jpg",
            product_cashback:"₹25 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"476",
            product_actprice:"418",
            product_cb:"25",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-18%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0033.jpg",
            product_pname:"Sebamed Extra Soft Baby Cream,200ml",
            product_sign:"MRP",
            product_price:"(Rs 637)",
            product_disprice:"Rs 519.9",
            product_circle:"circle.jpg",
            product_cashback:"₹31 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"637",
            product_actprice:"519.9",
            product_cb:"31",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-13%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0017.jpg",
            product_pname:"Sebamed Everyday Shampoo,200ml",
            product_sign:"MRP",
            product_price:"(Rs 599)",
            product_disprice:"Rs 518",
            product_circle:"circle.jpg",
            product_cashback:"₹31 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"599",
            product_actprice:"518",
            product_cb:"31",
        }
     ]
         
         
        
         sebamed_data.forEach(function(el){
         
         var div_sebdatafinal=document.createElement("div")
         
              var div_sebimgdis=document.createElement("div")
              var dis_sebimg = document.createElement("img")
              dis_sebimg.className = "smrt"
              dis_sebimg.src = el.product_disimg
         // console.log(dis_sebimg)
         // img.src = el./
 
              var dis_sebper = document.createElement("span")
              dis_sebper.className= "discount"
              dis_sebper.innerText = el.product_discount
         
         var sebavtar = document.createElement("img")
         sebavtar.src = el.product_img
         var sebname=document.createElement("p")
         sebname.innerText = el.product_pname
         var sebhr=document.createElement("hr")
         var sebdivprice = document.createElement("div")
         sebdivprice.className = "pricingcuts"
 
 
         var sebh5=document.createElement("h5")
         sebh5.innerText = el.product_sign
         var sebpricecut =document.createElement("span")
         sebpricecut.innerText = el.product_price
 
 
         var sebprice=document.createElement("h5")
         sebprice.innerText = el.product_disprice
         var sebcircle = document.createElement("div")
         sebcircle.className = "samcircle"
 
         var circle=document.createElement("img")
         circle.className = "circle"
         circle.src = el.product_circle
         // img.src = el. /
 
         var sebcashback=document.createElement("span")
         sebcashback.className = "cashback"
         sebcashback.innerText =el.product_cashback
 
         var sebbut=document.createElement("button")
         sebbut.className = "samcart"
         sebbut.innerText = el.product_atc
         sebbut.addEventListener("click",function(){
             addtocart(el)
         })
          
         div_sebimgdis.append(dis_sebimg,dis_sebper)
         sebdivprice.append(sebh5,sebpricecut)
         sebcircle.append(circle,sebcashback)
 
          div_sebdatafinal.append(div_sebimgdis,sebavtar,sebname,sebhr,sebdivprice,sebprice,sebcircle,sebbut)
          document.querySelector("#sam_sebamed").append(div_sebdatafinal)
 
         })
         
         var apollo_data=[
        {
            product_disimg:"discount.jpg",
            product_discount:"-10%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_9750_copy.jpg",
            product_pname:"Apollo Phrarmacy ORS Orange Flavour...",
            product_sign:"MRP",
            product_price:"(Rs 32)",
            product_disprice:"Rs 29",
            product_circle:"circle.jpg",
            product_cashback:"₹3 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"32",
            product_actprice:"29",
            product_cb:"3",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-5%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/p/aph0011.jpg",
            product_pname:"Apollo Life Honey,250 gm",
            product_sign:"MRP",
            product_price:"(Rs 104)",
            product_disprice:"Rs 99",
            product_circle:"circle.jpg",
            product_cashback:"₹10 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"104",
            product_actprice:"99",
            product_cb:"10",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-11%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_0337_copy.jpg",
            product_pname:"Apollo Phrarmacy Compressor Nebu...",
            product_sign:"MRP",
            product_price:"(Rs 1799)",
            product_disprice:"Rs 1588",
            product_circle:"circle.jpg",
            product_cashback:"₹159 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"1799",
            product_actprice:"1588",
            product_cb:"159",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-21%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210115_132411__front__electro_choice_orange_1.jpg",
            product_pname:"Apollo Phrarmacy Orange Flavour Ele...",
            product_sign:"MRP",
            product_price:"(Rs 32)",
            product_disprice:"Rs 25",
            product_circle:"circle.jpg",
            product_cashback:"₹3 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"32",
            product_actprice:"25",
            product_cb:"3",
        },
        { 
            product_disimg:"discount.jpg",  
            product_discount:"-10%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210116_122912__front__digital_thermometer_flexible.jpg",
            product_pname:"Apollo Phrarmacy Digital Flexible...",
            product_sign:"MRP",
            product_price:"(Rs 110)",
            product_disprice:"Rs 100",
            product_circle:"circle.jpg",
            product_cashback:"₹10 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"110",
            product_actprice:"100",
            product_cb:"10",
        }]
         
         apollo_data.forEach(function(el){
 
    var div_apollofinal=document.createElement("div")
         
    var div_aplimgdis=document.createElement("div")
    var dis_aplimg = document.createElement("img")
    dis_aplimg.className = "smrt"
    dis_aplimg.src = el.product_disimg
    // console.log(dis_sebimg)
    // img.src = el./
 
    var dis_aplper = document.createElement("span")
    dis_aplper.className= "discount"
    dis_aplper.innerText = el.product_discount
    
    var aplavtar = document.createElement("img")
    aplavtar.src = el.product_img
    var aplname=document.createElement("p")
    aplname.innerText = el.product_pname
    var aplhr=document.createElement("hr")
    var apldivprice = document.createElement("div")
    apldivprice.className = "pricingcuts"
 
 
    var aplh5=document.createElement("h5")
    aplh5.innerText = el.product_sign
    var aplpricecut =document.createElement("span")
    aplpricecut.innerText = el.product_price
 
 
    var aplprice=document.createElement("h5")
    aplprice.innerText = el.product_disprice
    var aplcircle = document.createElement("div")
    aplcircle.className = "samcircle"
 
    var circle=document.createElement("img")
    circle.className = "circle"
    circle.src = el.product_circle
    // img.src = el. /
 
    var aplcashback=document.createElement("span")
    aplcashback.className = "cashback"
    aplcashback.innerText =el.product_cashback
 
    var aplbut=document.createElement("button")
    aplbut.className = "samcart"
    aplbut.innerText = el.product_atc
    aplbut.addEventListener("click",function(){
             addtocart(el)
    })   
    div_aplimgdis.append(dis_aplimg,dis_aplper)
    apldivprice.append(aplh5,aplpricecut)
    aplcircle.append(circle,aplcashback)
     
     div_apollofinal.append(div_aplimgdis,aplavtar,aplname,aplhr,apldivprice,aplprice,aplcircle,aplbut)
     document.querySelector("#sam_apollo").append(div_apollofinal)
         
         })
         
         var summer_data=[
        {
            product_disimg:"discount.jpg",
            product_discount:"-15%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/l/glu0036_1.jpg",
            product_pname:"Glucon-D Regular Instant Energy Drin..",
            product_sign:"MRP",
            product_price:"(Rs 180)",
            product_disprice:"Rs 153",
            product_circle:"circle.jpg",
            product_cashback:"₹9 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"180",
            product_actprice:"153",
            product_cb:"9",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-1%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/8/9/8931801a.png",
            product_pname:"Cetaphil Sun SPF 50+ Very High Protection...",
            product_sign:"MRP",
            product_price:"(Rs 1000)",
            product_disprice:"Rs 990",
            product_circle:"circle.jpg",
            product_cashback:"₹59 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"1000",
            product_actprice:"990",
            product_cb:"59",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-5%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0040_2.jpg",
            product_pname:"Sebamed Clear Face Cleaning Foam,150ml",
            product_sign:"MRP",
            product_price:"(Rs 610)",
            product_disprice:"Rs 580",
            product_circle:"circle.jpg",
            product_cashback:"₹35 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"610",
            product_actprice:"580",
            product_cb:"35",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-11%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/o/lot0695.gif",
            product_pname:"Lotus Herbals Safe Sun UV Screen....",
            product_sign:"MRP",
            product_price:"(Rs 335)",
            product_disprice:"Rs 294.8",
            product_circle:"circle.jpg",
            product_cashback:"₹9 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1", 
            product_orgprice:"335",
            product_actprice:294.8,
            product_cb:9,
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-15%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/o/sof0413-1.jpg",
            product_pname:"Sofy Cool Freshness Menthol Fresh santar...",
            product_sign:"MRP",
            product_price:"(Rs 290)",
            product_disprice:"Rs 246.5",
            product_circle:"circle.jpg",
            product_cashback:"₹9 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1", 
            product_orgprice:"290",
            product_actprice:"246.5",
            product_cb:"9", 
        }
    ]
         
         summer_data.forEach(function(el){
 
             var div_summerfinal=document.createElement("div")
         
         var div_sumimgdis=document.createElement("div")
         var dis_sumimg = document.createElement("img")
         dis_sumimg.className = "smrt"
         dis_sumimg.src = el.product_disimg
    // console.log(dis_sebimg)
    // img.src = el./
 
         var dis_sumper = document.createElement("span")
         dis_sumper.className= "discount"
         dis_sumper.innerText = el.product_discount
    
    var sumavtar = document.createElement("img")
    sumavtar.src = el.product_img
    var sumname=document.createElement("p")
    sumname.innerText = el.product_pname
    var sumhr=document.createElement("hr")
    var sumdivprice = document.createElement("div")
    sumdivprice.className = "pricingcuts"
 
 
    var sumh5=document.createElement("h5")
    sumh5.innerText = el.product_sign
    var sumpricecut =document.createElement("span")
    sumpricecut.innerText = el.product_price
 
 
    var sumprice=document.createElement("h5")
    sumprice.innerText = el.product_disprice
    var sumcircle = document.createElement("div")
    sumcircle.className = "samcircle"
 
    var circle=document.createElement("img")
    circle.className = "circle"
    circle.src = el.product_circle
    // img.src = el. /
 
    var sumcashback=document.createElement("span")
    sumcashback.className = "cashback"
    sumcashback.innerText =el.product_cashback
 
    var sumbut=document.createElement("button")
    sumbut.className = "samcart"
 
 
    sumbut.innerText = el.product_atc
    sumbut.addEventListener("click",function(){
             addtocart(el)
    }) 
    div_sumimgdis.append(dis_sumimg,dis_sumper)
    sumdivprice.append(sumh5,sumpricecut)
    sumcircle.append(circle,sumcashback)
     
     div_summerfinal.append(div_sumimgdis,sumavtar,sumname,sumhr,sumdivprice,sumprice,sumcircle,sumbut)
     document.querySelector("#sam_summer").append(div_summerfinal)
         
         })
 
         var hot_data=[
        {
            product_disimg:"discount.jpg",
            product_discount:"-30%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/x/x/xxl40_front_1.jpg",
            product_pname:"MamyPoko Pants Extra Absorb XXL,40 Count",
            product_sign:"MRP",
            product_price:"(Rs 999)",
            product_disprice:"Rs 699.3",
            product_circle:"circle.jpg",
            product_cashback:"₹42 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"999",
            product_actprice:"699.3",
            product_cb:"42",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-20%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/p/bpm0063_1_1.jpg",
            product_pname:"Omron Blood Pressure Monitor HEM-7121J,...",
            product_sign:"MRP",
            product_price:"(Rs 2345)",
            product_disprice:"Rs 1876",
            product_circle:"circle.jpg",
            product_cashback:"₹113 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"2345",
            product_actprice:"1876",
            product_cb:"113",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-29%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/g/n/gnc_amp_whey_1kg_1.jpg",
            product_pname:"GNC AMP Gold 100% Whey Protien Advanc...",
            product_sign:"MRP",
            product_price:"(Rs 4499)",
            product_disprice:"Rs 3149.3",
            product_circle:"circle.jpg",
            product_cashback:"₹189 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"4499",
            product_actprice:"3149.3",
            product_cb:"189",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-15%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/o/sof0371_1_1.jpg",
            product_pname:"Sofy Antibacteria Pads Extra Long,48 Count",
            product_sign:"MRP",
            product_price:"(Rs 399)",
            product_disprice:"Rs 339",
            product_circle:"circle.jpg",
            product_cashback:"₹20 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"399",
            product_actprice:"339",
            product_cb:"20",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-14%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0115.jpg",
            product_pname:"Glucon-D Instant Energy Tangy Orange...",
            product_sign:"MRP",
            product_price:"(Rs 160)",
            product_disprice:"Rs 142.8",
            product_circle:"circle.jpg",
            product_cashback:"₹9 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"160",
            product_actprice:"142.8",
            product_cb:"9",
        }]
        
        hot_data.forEach(function(el){
 
         var div_hotfinal=document.createElement("div")
         
         var div_hotimgdis=document.createElement("div")
         var dis_hotimg = document.createElement("img")
         dis_hotimg.className = "smrt"
         dis_hotimg.src = el.product_disimg
    // console.log(dis_sebimg)
    // img.src = el./
 
         var dis_hotper = document.createElement("span")
         dis_hotper.className= "discount"
         dis_hotper.innerText = el.product_discount
    
    var hotavtar = document.createElement("img")
    hotavtar.src = el.product_img
    var hotname=document.createElement("p")
    hotname.innerText = el.product_pname
    var hothr=document.createElement("hr")
    var hotdivprice = document.createElement("div")
    hotdivprice.className = "pricingcuts"
 
 
    var hoth5=document.createElement("h5")
    hoth5.innerText = el.product_sign
    var hotpricecut =document.createElement("span")
    hotpricecut.innerText = el.product_price
 
 
    var hotprice=document.createElement("h5")
    hotprice.innerText = el.product_disprice
    var hotcircle = document.createElement("div")
    hotcircle.className = "samcircle"
 
    var circle=document.createElement("img")
    circle.className = "circle"
    circle.src = el.product_circle
    // img.src = el. /
 
    var hotcashback=document.createElement("span")
    hotcashback.className = "cashback"
    hotcashback.innerText =el.product_cashback
 
    var hotbut=document.createElement("button")
    hotbut.className = "samcart"
 
 
    hotbut.innerText = el.product_atc
    hotbut.addEventListener("click",function(){
             addtocart(el)
    })
 
    div_hotimgdis.append(dis_hotimg,dis_hotper)
    hotdivprice.append(hoth5,hotpricecut)
    hotcircle.append(circle,hotcashback)
     
     div_hotfinal.append(div_hotimgdis,hotavtar,hotname,hothr,hotdivprice,hotprice,hotcircle,hotbut)
     document.querySelector("#sam_hot").append(div_hotfinal)
         
 
 
        })
 
        var ShopByCategory=[
        {
         sbc_img:"https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png",
         sbc_p:"Health Devices" 
        },
        { 
           sbc_img:"https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png",
           sbc_p:"Baby Care",
        },
        {
           sbc_img:"https://newassets.apollo247.com/pub/media/catalog/category/health_and_nutrition_22oct.png",
            sbc_p:"Health & Nutrition",
        },
        {
           sbc_img:"https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg",
           sbc_p:"Ayurvedha",
        },
        {
           sbc_img:"https://newassets.apollo247.com/pub/media/catalog/category/personal_care_22oct.png",
           sbc_p:"Personal Care",
        }
     ,
        {
           sbc_img: "https://newassets.apollo247.com/pub/media/catalog/category/home_essentials_22oct.png",
           sbc_p:"Home Essentials"
       }]
 
       ShopByCategory.forEach(function(el){
       
         var div_sbcfinal=document.createElement("div")
         
         var sbcavtar = document.createElement("img")
         sbcavtar.src = el.sbc_img
   
         var sbcname=document.createElement("p")
         sbcname.innerText = el.sbc_p
      
        
         div_sbcfinal.append(sbcavtar,sbcname)
         document.querySelector("#sam_shopbycategory").append(div_sbcfinal)
 
       })
      
       var HalfPrice=[
        {
            product_disimg:"discount.jpg",
            product_discount:"-50%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lit0170_3.jpg",
            product_pname:"Little Soft Cleanising Baby Wipes,80 Count",
            product_sign:"MRP",
            product_price:"(Rs 190)",
            product_disprice:"Rs 95",
            product_circle:"circle.jpg",
            product_cashback:"₹6 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"190",
            product_actprice:"95",
            product_cb:"6",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-50%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/p/aph0081_front.jpg",
            product_pname:"Apollo Life Hand Santizer Liquid Spray",
            product_sign:"MRP",
            product_price:"(Rs 250)",
            product_disprice:"Rs 125",
            product_circle:"circle.jpg",
            product_cashback:"₹13 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"250",
            product_actprice:"125",
            product_cb:"13",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-50%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/k/a/kam0196.jpg",
            product_pname:"Kamsutra Spark Deodrant Body Spray",
            product_sign:"MRP",
            product_price:"(Rs 329)",
            product_disprice:"Rs 164.5",
            product_circle:"circle.jpg",
            product_cashback:"₹10 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"329",
            product_actprice:"164.5",
            product_cb:"10",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-50%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/set0156.jpg",
            product_pname:"Set Wet Swag Avatar Deodorant Body Spray",
            product_sign:"MRP",
            product_price:"(Rs 199)",
            product_disprice:"Rs 99.5",
            product_circle:"circle.jpg",
            product_cashback:"₹6 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"199",
            product_actprice:"99.5",
            product_cb:"6",
        },
        {
            product_disimg:"discount.jpg",
            product_discount:"-7%",
            product_img:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/col0550_1.jpg",
            product_pname:"Colgate Sensitive Plus Anticavity Toothpaste,..",
            product_sign:"MRP",
            product_price:"(Rs 140)",
            product_disprice:"Rs 130",
            product_circle:"circle.jpg",
            product_cashback:"₹5 extra cashback",
            product_atc:"ADD TO CART",
            product_quantity:"1",
            product_orgprice:"140",
            product_actprice:"130",
            product_cb:"5",
        }]
 
        HalfPrice.forEach(function(el){
        
         var div_halffinal=document.createElement("div")
         
         var div_halfimgdis=document.createElement("div")
         var dis_halfimg = document.createElement("img")
         dis_halfimg.className = "smrt"
         dis_halfimg.src = el.product_disimg
    // console.log(dis_sebimg)
    // img.src = el./
 
         var dis_halfper = document.createElement("span")
         dis_halfper.className= "discount"
         dis_halfper.innerText = el.product_discount
    
    var halfavtar = document.createElement("img")
    halfavtar.src = el.product_img
    var halfname=document.createElement("p")
    halfname.innerText = el.product_pname
    var halfhr=document.createElement("hr")
    var halfdivprice = document.createElement("div")
    halfdivprice.className = "pricingcuts"
 
 
    var halfh5=document.createElement("h5")
    halfh5.innerText = el.product_sign
    var halfpricecut =document.createElement("span")
    halfpricecut.innerText = el.product_price
 
 
    var halfprice=document.createElement("h5")
    halfprice.innerText = el.product_disprice
    var halfcircle = document.createElement("div")
    halfcircle.className = "samcircle"
 
    var circle=document.createElement("img")
    circle.className = "circle"
    circle.src = el.product_circle
    // img.src = el. /
 
    var halfcashback=document.createElement("span")
    halfcashback.className = "cashback"
    halfcashback.innerText =el.product_cashback
 
    var halfbut=document.createElement("button")
    halfbut.className = "samcart"
 
 
    halfbut.innerText = el.product_atc
    halfbut.addEventListener("click",function(){
             addtocart(el)
    })
    div_halfimgdis.append(dis_halfimg,dis_halfper)
    halfdivprice.append(halfh5,halfpricecut)
    halfcircle.append(circle,halfcashback)
     
     div_halffinal.append(div_halfimgdis,halfavtar,halfname,halfhr,halfdivprice,halfprice,halfcircle,halfbut)
     document.querySelector("#sam_half").append(div_halffinal)
          
        })
      var samrat=[]
      atc_prodsdata = JSON.parse(localStorage.getItem("addtocart")) || []
       function addtocart(el){
           
           atc_prodsdata.push(el)
                       console.log(atc_prodsdata)
            //    console.log(el)
               localStorage.setItem("addtocart",JSON.stringify(atc_prodsdata));
            // localStorage.setItem("addsamrat",JSON.stringify(samrat))
               alert("Congratulation Your Product has been Added Sucessfully")
            //    console.log(atc_prodsdata)

          }
       
       
 
 