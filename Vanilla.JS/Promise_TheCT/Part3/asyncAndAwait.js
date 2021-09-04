//Syntax Sugar
//Syntax Sugar
//Syntax Sugar
//Syntax Sugar
//Syntax Sugar

function setup() {
  noCanvas();
  delayES8(1000)
    .then(() => createP("hello"))
    .catch(err => console.log(err));
}

async function delayES8(time) {
  
  //this functions returns a promise and if it does then I
  //can write await and wait for it to be resolved.
  //AND IT CAN ONLY BE USED IN AN ASYNC FUNCTION
  await delay(time); 
  return;

}









//imagine this delay function to be a part of some js library and delay returns a promise.
function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) reject(console.error("Enter a number"));
    else setTimeout(resolve, time);
  });
}
