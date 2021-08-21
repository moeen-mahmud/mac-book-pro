/**
 * Function for adding feature and update the total price
 * @param {string} featureType name of the feature
 * @param {string} featureSize size of the feature
 * @param {number} featurePrice price of the feature
 * @returns {function totalSum()} for updating the calculation
 */
function addFeature(featureType, featureSize, featurePrice) {
  document
    .getElementById("size-" + featureSize)
    .addEventListener("click", function () {
      const memoryCost = document.getElementById(featureType + "-cost");
      memoryCost.innerText = featurePrice;
      return totalSum();
    });
}

/**
 * Function for adding delivery option and update the total price
 * @param {string} deliveryType type of delivery
 * @param {number} deliveryPrice price of delivery
 * @returns {function totalSum()} for updating the calculation
 */
function selectDelivery(deliveryType, deliveryPrice) {
  document
    .getElementById(deliveryType + "-delivery")
    .addEventListener("click", function () {
      const deliveryCost = document.getElementById("delivery-cost");
      deliveryCost.innerText = deliveryPrice;
      return totalSum();
    });
}

/**
 * Function for calculating total price and grand total
 */
function totalSum() {
  // Getting the inner texts
  const totalCost = document.getElementById("total-cost");
  const bestCost = document.getElementById("best-cost");
  const bestCostParsed = parseFloat(bestCost.innerText);
  const memoryCost = document.getElementById("memory-cost");

  // Parsing the inner texts
  const memoryCostParsed = parseFloat(memoryCost.innerText);
  const storageCost = document.getElementById("storage-cost");
  const storageCostParsed = parseFloat(storageCost.innerText);
  const deliveryCost = document.getElementById("delivery-cost");
  const deliveryCostParsed = parseFloat(deliveryCost.innerText);

  // Getting the value of grand total
  const grandTotal = document.getElementById("grand-total");

  // Calculate the total price
  const totalPriceValue =
    bestCostParsed + memoryCostParsed + storageCostParsed + deliveryCostParsed;

  // Update the total price and grand total
  totalCost.innerText = totalPriceValue;
  grandTotal.innerText = totalPriceValue;
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

// Event for promo button
document.getElementById("promo-btn").addEventListener("click", function () {
  const promoField = document.getElementById("promo-input");
  const totalPrice = document.getElementById("total-cost");
  const grandTotal = document.getElementById("grand-total");
  if (promoField.value == "stevekaku") {
    const totalPriceCost = totalPrice.innerText;
    const promoValue = totalPriceCost * (20 / 100);
    const grandTotalPromo = totalPriceCost - promoValue;
    grandTotal.innerText = grandTotalPromo;
  }
  promoField.value = "";
});
