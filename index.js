let productSection = document.getElementById("product-section");
let dynamicCards = items.map( (item, index) => {
    return(`
    <div id="prodect-card" class="">
        <div class="">
            <img class="h-[280px] w-[210px]" src="${item.img}" alt="">
        </div>
        <div class="">
            <h1 class="text-lg font-bold">${item.name}</h1>
            <p class="text-sm text-gray-500">${item.dis}</p>
            <h1 class="text-base font-bold">${item.price} 
            <span class="line-through text-sm text-gray-500">
            ${item.actualPrice}
            </span>
            <span class="text-base font-semibold text-red-500">
            (${item.discount}%OFF)
            </span>
            </h1>
        </div> 
    </div>`
)}).join("")

 
productSection.innerHTML = dynamicCards;