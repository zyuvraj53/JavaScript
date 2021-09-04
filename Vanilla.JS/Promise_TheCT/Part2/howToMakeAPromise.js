function setup() {
  noCanvas();
  delay(1000)
    .then(() => createP("hello"))
    .catch(err => console.log(err));

  delay("promising") //supposed to return an error
    .then(() => createP("hello"))
    .catch(err => console.log(err));
}

function delay(time) {
  // function dealWithPromise(resolve, reject) {
  // setTimeout(() => callback(), time);
  // }
  //but rather than doing this, we can create an anon func

  return new Promise((resolve, reject) => {
    if (isNaN(time)) reject(console.error("Enter a number"));
    else setTimeout(resolve, time); //the callback is resolve.
  });

  //usually the first functions in setTimeout is written like this.
  //() => resolve()

  // setTimeout(sayHello, time);
}

// function sayHello(){
//   createP("hello");
// }//we don't need this function anymore
