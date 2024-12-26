import Car from './Car';

function init(car: Car) {
    console.log(car)
}

init({ brand: "Fiat", model: "Pulse" });
init(new Car("Fiat", "Pulse"));
