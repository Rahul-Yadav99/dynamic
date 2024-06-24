let productSection = document.getElementById("product-section");
let dynamicCards = items.map(function(items){
    return `
    <div id="prodect-card" class="">
        <div class="">
            <img class="h-[280px] w-[210px]" src="${items.img}" alt="">
        </div>
        <div class="">
            <h1 class="text-lg font-bold">${items.name}</h1>
            <p class="text-sm text-gray-500">${items.dis}</p>
            <h1 class="text-base font-bold">${items.price} 
            <span class="line-through text-sm text-gray-500">
            ${items.actualPrice}
            </span>
            <span class="text-base font-semibold text-red-500">
            (${items.discount}%OFF)
            </span>
            </h1>
        </div> 
    </div>`
})
productSection.innerHTML = dynamicCards;