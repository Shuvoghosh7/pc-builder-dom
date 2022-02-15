
onclick("eightGB","memory-cost",0);
onclick("sixteenGB","memory-cost",200);
onclick("ssd1","storage-cost",0);
onclick("ssd2","storage-cost",300);
onclick("ssd3","storage-cost",500);
onclick("free-delivery","delivery-cost",0);
onclick("paid-delivery","delivery-cost",20);

function onclick (clickId,priceId,price){
    document.getElementById(clickId).addEventListener("click",function(){
        updatePrice(priceId,price);
        
    })
}

function updatePrice(inputId,price){
    const memoryCost = document.getElementById(inputId);
    memoryCost.innerText=price;
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;
    const totalCost = parseFloat(bestPrice)+parseFloat(memoryPrice)+parseFloat(storagePrice)+parseFloat(deliveryPrice);
    const total= document.getElementById("total-price");
    total.innerText=totalCost;
}
const fackCode = 's007g';
document.getElementById("apply-btn").addEventListener("click",function(){
    const promoInput = document.getElementById("promo-input").value;
    if(promoInput === fackCode){
        const total= document.getElementById("total-price");
        const totalPrice = parseInt(total.innerText);
        const discount = totalPrice * 0.2;
        const updateDiscountPrice = totalPrice -discount;
        total.innerText = updateDiscountPrice;
    }else{
        console.log(alert("Give correct input"))
    }
    
})