const fs = require("fs");
const readline = require("readline");
const { randomId } = require("./id-list");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directory = "./db/data-list.json";
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

const checkFile = "./db/data-list.json";
if (!fs.existsSync(checkFile)) {
  fs.writeFileSync(checkFile, "[]", "utf-8");
}

const listQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const list = () => {
  const fileList = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(fileList);
  console.log(data);

  rl.close();
};

const storeList = (namee, clas, school, age, statuss, hoby, profession) => {
  const id = randomId(6);
  const list = { id, namee, clas, school, age, statuss, hoby, profession };
  const file = fs.readFileSync(checkFile, "utf-8");

  const dataList = JSON.parse(file);
  dataList.push(list);
  fs.writeFileSync(checkFile, JSON.stringify(dataList));
  console.log("Tankyou for submit");

  rl.close();
};

const getById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const data = JSON.parse(file);
  const findListId = data.find((list) => list.id === id);

  if (findListId) {
    console.log(findListId);
  } else {
    console.log(`List dengan ID ${findListId} tidak ditemukan.`);
  }

  rl.close();
};

const updateById = (id, updateList) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataLists = JSON.parse(file);
  const index = dataLists.findIndex((list) => list.id === id);

  if (index !== -1) {
    dataLists[index] = { ...dataLists[index], ...updateList };
    fs.writeFileSync(checkFile, JSON.stringify(dataLists));
    console.log(`Successfully update list: ${id}`);
  } else {
    console.log(`List dengan id ${id} tidak ditemukan`);
  }

  rl.close();
};

const deleteById = (id) => {
  const file = fs.readFileSync(checkFile, "utf-8");
  const dataList = JSON.parse(file);
  const filterListId = dataList.filter((list) => list.id !== id);

  if (filterListId.length < dataList.length) {
    fs.writeFileSync(checkFile, JSON.stringify(filterListId));
    console.log(`Successfully delete list : ${id}`);
  } else {
    console.log(`List dengan id ${id} tidak ditemukan`);
  }
  rl.close();
};

module.exports = {
  listQuestion,
  list,
  storeList,
  getById,
  updateById,
  deleteById,
};
