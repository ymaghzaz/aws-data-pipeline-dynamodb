const AWS = require("aws-sdk");
const converter = require("aws-sdk/lib/dynamodb/converter");

const d = {
  id: "48.2_2.4_644",
  id_p: "48.2_2.4",
  id_n: "644",
  lat: "48.2",
  lng: "2.4",
  data: [
    { k: "1", s: "1" },
    { k: "2", s: "2" },
    { k: "3", s: "3" },
    { k: "4", s: "4" },
    { k: "5", s: "5" },
    { k: "6", s: "6" }
  ]
};

let data = converter.input(d);

console.log("data", JSON.stringify(data));
