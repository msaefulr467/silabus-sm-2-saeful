const { deleteById, listQuestion } = require("./lists");

const deleteList = async () => {
  const id = await listQuestion("Masukan id list : ");
  deleteById(id);
};

deleteList();
