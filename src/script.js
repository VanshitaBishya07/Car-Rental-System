// Sample car data
let cars = [
    { id: "C001", brand: "Toyota", model: "Camry", price: 60, available: true },
    { id: "C002", brand: "Honda", model: "Accord", price: 70, available: true },
    { id: "C003", brand: "Mahindra", model: "Thar", price: 150, available: true },
];

const carListElement = document.getElementById("car-list");
const messageElement = document.getElementById("message");

// Display available cars
function displayCars() {
    carListElement.innerHTML = "";
    cars.forEach(car => {
        if (car.available) {
            const carInfo = document.createElement("div");
            carInfo.textContent = `ID: ${car.id}, ${car.brand} ${car.model}, $${car.price}/day`;
            carListElement.appendChild(carInfo);
        }
    });
}

// Rent a car
function rentCar() {
    const customerName = document.getElementById("customer-name").value;
    const carId = document.getElementById("car-id").value;
    const rentalDays = parseInt(document.getElementById("rental-days").value);

    const car = cars.find(c => c.id === carId && c.available);

    if (car && customerName && rentalDays > 0) {
        car.available = false;
        const totalCost = car.price * rentalDays;
        messageElement.textContent = `Success! ${customerName} rented ${car.brand} ${car.model} for ${rentalDays} days. Total: $${totalCost.toFixed(2)}.`;
    } else {
        messageElement.textContent = "Invalid input or car not available.";
    }

    displayCars();
}

// Return a car
function returnCar() {
    const carId = document.getElementById("return-car-id").value;

    const car = cars.find(c => c.id === carId && !c.available);

    if (car) {
        car.available = true;
        messageElement.textContent = `Car ${car.brand} ${car.model} returned successfully.`;
    } else {
        messageElement.textContent = "Invalid input or car was not rented.";
    }

    displayCars();
}

// Initialize display
displayCars();
