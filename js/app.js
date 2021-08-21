// Function for feature selection
function addFeature(featureType, featureSize, featurePrice) {
  document
    .getElementById("size-" + featureSize)
    .addEventListener("click", function () {
      const memoryCost = document.getElementById(featureType + "-cost");
      memoryCost.innerText = featurePrice;
      return totalSum();
    });
}

//Function for delivery selection
function selectDelivery(deliveryType, deliveryPrice) {
  document
    .getElementById(deliveryType + "-delivery")
    .addEventListener("click", function () {
      const deliveryCost = document.getElementById("delivery-cost");
      deliveryCost.innerText = deliveryPrice;
      return totalSum();
    });
}

//Adding extra memory
addFeature("memory", "8GB", 0);
addFeature("memory", "16GB", 180);

//Adding extra storage
addFeature("storage", "256GB", 0);
addFeature("storage", "512GB", 100);
addFeature("storage", "1TB", 180);

//Adding delivary option
selectDelivery("prime", 0);
selectDelivery("rapid", 20);

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
    grandTotal.innerText = grandTotalPromo + " (after promo)";
  }
  promoInput.value = "";
});
