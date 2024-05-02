const { getById, listQuestion } = require("./lists");

const getListId = async () => {
  const listId = await listQuestion("Masukan ID list : ");
  getById(listId);
};

getListId();

module.exports = {
  getListId
}