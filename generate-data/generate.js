const faker = require("faker");
const fs = require("fs");

let users = [];
for (let i = 0; i < 10; i++) {
  var { posts, accountHistory, ...card } = faker.helpers.createCard();
  users.push(card);
}

try {
  fs.writeFile("../data/data.json", JSON.stringify(users), console.log);
} catch (err) {
  console.error(err);
}

const { parse } = require("json2csv");

try {
  let csv_users = users.map(user => {
    let { company, address, ...userInfo } = user;
    return userInfo;
  });
  const csv = parse(csv_users);
  fs.writeFile("../data/data.csv", csv, console.log);
} catch (err) {
  console.error(err);
}
