let stocks = {
  Fruits :   ["Strawberry", "grapes", "banana", "apple"],
  liquid :   ["Water", "Ice"],
  holder :   ["Cone", "Cup", "Stick"],
  toppings : ["Chocolate", "Peanuts"]
}

let order = (Fruit_name, call_production) => {

  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`) 
    call_production();
  }, 2000)
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started!");

    setTimeout(() => {
      console.log("The Fruit has been chopped."); 

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

        setTimeout(() => {
          console.log("The machine was started."); 

          setTimeout(() => {
            console.log(`Ice-Cream was placed on the ${stocks.holder[0]}.`);
            
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was sprinkled.`); 

              setTimeout(() => {
                console.log("Serve Ice-Cream!"); 
              }, 2000)
            }, 3000)
          }, 2000);
        }, 1000);
      }, 1000)
    }, 2000);
  }, 0000)
};

order(0, production);