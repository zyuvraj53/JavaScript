let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = false;

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist", error);
  } finally {
    console.log("runs code anyway");
  }
}

function time(ms){
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(() => {
        
      }, 2000);
    }
  })
}
order();
