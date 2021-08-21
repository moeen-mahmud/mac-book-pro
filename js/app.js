//Event for 8GB memory add
const memory8GB = document
  .getElementById("memory-8GB")
  .addEventListener("click", function () {
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 0;
    totalSum();
  });

//Event for 16GB memory add
const memory16GB = document
  .getElementById("memory-16GB")
  .addEventListener("click", function () {
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 180;
    totalSum();
  });

//Event for 256GB Storage

const storage256GB = document
  .getElementById("storage-256GB")
  .addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 0;
    totalSum();
  });

//Event for 512GB Storage
const storage512GB = document
  .getElementById("storage-512GB")
  .addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 100;
    totalSum();
  });

//Event for 1TB Storage
const storage1TB = document
  .getElementById("storage-1TB")
  .addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 180;
    totalSum();
  });

//Event for prime delivery
const primeDelivery = document
  .getElementById("prime-delivery")
  .addEventListener("click", function () {
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 0;
    totalSum();
  });

//Event for rapid delivery
const rapidDelivery = document
  .getElementById("rapid-delivery")
  .addEventListener("click", function () {
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 20;
    totalSum();
  });

//Function for calculating total
function totalSum() {
  const totalCost = document.getElementById("total-cost");
  const bestCost = document.getElementById("best-cost");
  const bestCostParsed = parseFloat(bestCost.innerText);
  const memoryCost = document.getElementById("memory-cost");
  const memoryCostParsed = parseFloat(memoryCost.innerText);
  const storageCost = document.getElementById("storage-cost");
  const storageCostParsed = parseFloat(storageCost.innerText);
  const deliveryCost = document.getElementById("delivery-cost");
  const deliveryCostParsed = parseFloat(deliveryCost.innerText);

  const grandTotal = document.getElementById("grand-total");
  
  const totalPriceValue =
    bestCostParsed + memoryCostParsed + storageCostParsed + deliveryCostParsed;

  totalCost.innerText = totalPriceValue;
  grandTotal.innerText = totalPriceValue;
}

//Event for promo price
document.getElementById("promo-btn").addEventListener("click", function () {
  const promoInput = document.getElementById("promo-input");
  const promoCoupon = "stevekaku";
  if (promoInput.value == promoCoupon) {
    const totalPrice = document.getElementById("total-cost");
    let totalPriceCost = totalPrice.innerText;
    const promoValue = totalPriceCost * (20 / 100);
    const grandTotal = document.getElementById("grand-total");
    let grandTotalPromo = totalPriceCost - promoValue;
    grandTotal.innerText = grandTotalPromo;
  }
});
