function setup() {
  let promise = fetch(someAPI);

  promise.then(gotData);
  promise.then(gotErr);

  function gotData(data) {
    console.log(data);
  }

  function gotErr(err) {
    console.err(err);
  }

  //rather than writing so many things we can just say/
  fetch(someAPI).then(gotData).catch(gotErr);
  //then we can just replace these functions with anon funcs/
  fetch(someAPI)
    .then(function gotData(data) {
      console.log(data);
    })
    .catch(function gotErr(err) {
      console.err(err);
    });

  //anon functions also don't need names
  fetch(someAPI)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.err(err);
    });

  //we can also replace the word function with an arrow symbol

  fetch(someAPI)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.err(err);
    });

  //we can also remove unnecessary brackets/

  fetch(someAPI)
    .then(data => console.log(data))
    .catch(err => console.err(err));

  //infact we don't even need the para for vars, but the editor puts
  //it in before saving

  fetch(someAPI)
    .then(data => console.log(data))
    .catch(err => console.err(err));
}
