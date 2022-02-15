// this is main part that convert function
/* document.getElementById("sixteenGB").addEventListener("click",function(){
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 200;
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    const total=document.getElementById("total-price");
    total.innerText = totalPrice; 
  //use function 
  updatePrice('memory-cost',300)
 
});
// select defolt 
document.getElementById("eightGB").addEventListener("click",function(){
    updatePrice('memory-cost',0)
})
// add even handeller storage 
document.getElementById("ssd3").addEventListener("click",function(){
    updatePrice('storage-cost',500)
})
// add delevary cost handeller storage 
document.getElementById("paid-delivery").addEventListener("click",function(){
    updatePrice('delivery-cost',20)
}) */
// this is part start  that convert function
onclick("eightGB","memory-cost",0)
onclick("sixteenGB","memory-cost",300)
onclick("ssd1","storage-cost",0)
onclick("ssd2","storage-cost",500)
onclick("ssd3","storage-cost",700)
onclick("free-delivery","delivery-cost",0)
onclick("paid-delivery","delivery-cost",20)

function onclick(clickId,updateId,price){
    document.getElementById(clickId).addEventListener("click",function(){
        updatePrice(updateId,price)
    })
}

function updatePrice(itemId,price){
   
        const memoryCost = document.getElementById(itemId);
        memoryCost.innerText = price;
        const bestPrice = document.getElementById("best-price").innerText;
        const memoryPrice = document.getElementById("memory-cost").innerText;
        const storagePrice = document.getElementById("storage-cost").innerText;
        const deliveryPrice = document.getElementById("delivery-cost").innerText;
        const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
        const total=document.getElementById("total-price");
        total.innerText = totalPrice;
    
}

// apply button dectect
const fackCode = "pHero"
document.getElementById("apply-btn").addEventListener("click",function(){
    const promoCode = document.getElementById("promo-input").value;
    if(promoCode == fackCode){
        const total = document.getElementById("total-price");
        const totalPrice = parseInt(total.innerText);
        const discount = (totalPrice * 20)/100;
        const priceUpdate = totalPrice - discount;
        total.innerText = priceUpdate;
   
    }else{
        console.log(alert("write the correct Code"))
    }
    
   
    
})