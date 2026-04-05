// Base Class
class Fuel {
  constructor(price) {
    this.price = price;
  }

  calculate(litres) {
    return this.price * litres;
  }
}

// Inheritance
class Petrol extends Fuel {
  constructor() {
    super(100);
  }
}

class Diesel extends Fuel {
  constructor() {
    super(90);
  }
}

// Main Function
function calculateBill() {
  let fuelType = document.getElementById("fuel").value;
  let litres = document.getElementById("litres").value;

  if (litres === "" || litres <= 0) {
    document.getElementById("details").innerText = "Enter valid litres!";
    return;
  }

  let fuelObj;

  // Polymorphism
  if (fuelType === "petrol") {
    fuelObj = new Petrol();
  } else {
    fuelObj = new Diesel();
  }

  let total = fuelObj.calculate(litres);

  document.getElementById("details").innerHTML =
    "Fuel Type: " + fuelType + "<br>" +
    "Litres: " + litres + "<br>" +
    "Total Bill: ₹" + total;
}