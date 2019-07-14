const faker = require("faker");
const fs = require("fs");

const generateUserData = number => {
  let users = [];
  for (let i = 0; i < number; i++) {
    var { posts, accountHistory, ...card } = faker.helpers.createCard();
    users.push(card);
  }
  return users;
};

try {
  fs.writeFile(
    "../data/data.json",
    JSON.stringify(generateUserData(10)),
    console.log
  );
} catch (err) {
  console.error(err);
}

const { parse } = require("json2csv");

try {
  let users = generateUserData(10);
  let csv_users = users.map(user => {
    let { company, address, ...userInfo } = user;
    return userInfo;
  });
  const csv = parse(csv_users);
  fs.writeFile("../data/data.csv", csv, console.log);
} catch (err) {
  console.error(err);
}
