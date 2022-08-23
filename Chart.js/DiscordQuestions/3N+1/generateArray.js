function generateSequence(n){
  let sequence = [];
  while(n != 1){
    sequence.push(n);
    if(n % 2 == 0){
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
  }
  if(n == 1){
    sequence.push(n);
  }
  if(n <= 0){
    console.error("n must be greater than 0");
  }

  return sequence;
}

function generateNums(n){
  let nums = [];
  for(let i = 0; i < n; i++){
    nums.push(i + 1);
  }
  return nums;
}

function findGreatest(sequence){
  let greatest = 0;
  for(let i = 0; i < sequence.length; i++){
    if(sequence[i] > greatest){
      greatest = sequence[i];
    }
  }
  return greatest;
}