let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = false;

let toppings_choice = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you like?")); 
    })
  }, 3000)
}

async function kitchen(){
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the table");
console.log("taking others orders");   