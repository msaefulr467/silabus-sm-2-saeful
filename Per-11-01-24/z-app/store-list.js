const { storeList, list, listQuestion } = require("./lists");

const isNonEmptyString = (value) => {
  return typeof value === "string" && value.trim() !== "";
};

const validateField = async (question) => {
  let value = "";
  while (!isNonEmptyString(value)) {
    value = await listQuestion(question);
    if (!isNonEmptyString(value)) {
      console.log("Nama tidak boleh kosong, minimal 1 huruf");
    }
  }
  return value;
};

const addList = async () => {
  const namee = await validateField("Masukan nama anda : ");
  const clas = await validateField("Masukan kelas anda c/(X-PPLG) : ");
  const school = await validateField("Masukan nama sekolah anda : ");
  const age = await validateField("Masukan umur anda : ");
  const statuss = await validateField("Masukan status anda : ");
  const hoby = await validateField("Masukan hobi anda : ");
  const profession = await validateField("Masukan profesi anda : ");

  storeList(namee, clas, school, age, statuss, hoby, profession);
};

addList();


module.exports = {
  addList
}