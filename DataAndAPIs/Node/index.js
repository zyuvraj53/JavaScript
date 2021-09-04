const express = require("express");
const Datastore = require("nedb");

const app = express();

const listeningAt= 5050;
app.listen(listeningAt, () => console.log("listening at "+ listeningAt));

app.use(express.static("public"));
app.use(express.json({ limit: "250kb" }));

// app.post("/api", (request, response) => {
//   console.log(request.body);
//   response.json({
//     status: "success",
//     latitude: request.body.lat,
//     longitude: request.body.lon,
//   });
// });

const database = new Datastore('database.db');
database.loadDatabase();
// database.insert({name: "Sheefmahn" , status:"🎈"});
// database.insert({name: "Daniel" , status:"🎃"});

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json({
    status: "success",
    timestamp: timestamp,
    latitude: data.latitude,
    longitude: data.longitude,
  });
  // console.log(database);
});

//The above code was copied from Dan.