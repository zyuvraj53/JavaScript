function one(fun){
  console.log("step one complete. Please call step two.") 
  fun();
}

function two(){
  console.log("step two") 
} 

one(two);