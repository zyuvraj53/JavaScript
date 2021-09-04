//async-await

function setup() {
  noCanvas();
  wordGIF()
    .then(results => {
      createP(results.word);
      createImg(results.img);
    })
    .catch(console.error(error));
}

async function wordGIF() {
  let response1 = await fetch(WordnikAPI);
  let json1 = await response1.json();
  let word = json1.word;
  let response2 = await fetch(giphyAPI + word);
  let json2 = await response2.json();
  let img_url = json2.data[0].img.url;

  return {
    word: word,
    img: img_url,
  };

  // fetch(WordnikAPI)
  //   .then(response => response.json())
  //   .then(json => {
  //     createP(json.word);
  //     return fetch(giphyAPI + json.word)
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     createImg(json.data[0].img.url);
  //   })
  //   .catch(err => console.error(err));
}
