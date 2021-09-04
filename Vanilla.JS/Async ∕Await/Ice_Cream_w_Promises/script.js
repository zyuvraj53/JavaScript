let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is now closed!"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))

  .then(() => {
    return order(0000, () => console.log("Production has started!"));
  })

  .then(() => {
    return order(2000, () => console.log("The Fruit has been chooped."));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added.`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("The machine was started."));
  })

  .then(() => {
    return order(2000, () => console.log(`Ice-Cream was placed on the ${stocks.Holder[0]}.`));
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.Toppings[0]} was sprinkled.`));
  })

  .then(() => {
    return order(2000, () => console.log("Serve Ice-Cream!"));
  })

  .catch(() => {
    console.log("The customer left."); 
  })

  .finally(() => {
    console.log("Day ended, the shop is now closed."); 
  });
