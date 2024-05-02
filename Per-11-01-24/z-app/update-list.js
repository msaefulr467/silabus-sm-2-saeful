const { updateById, listQuestion } = require("./lists");

const isValidId = (id) => {
  return typeof id === "string" && id.trim() !== "";
};

const isNonEmptyString = (value) => {
  return typeof value === "string" && value.trim() !== "";
};

const validateUpdate = async () => {
  const id = await listQuestion("Masukkan id anda : ");
  if (!isValidId(id)) {
    console.log("Invalid ID. Update aborted.");
    return;
  }

  const namee = await validateField("Masukkan nama anda: ");
  const clas = await validateField("Masukkan kelas anda c/(X-PPLG): ");
  const school = await validateField("Masukkan nama sekolah anda: ");
  const age = await validateField("Masukkan umur anda: ");
  const statuss = await validateField("Masukkan status anda: ");
  const hoby = await validateField("Masukkan hobi anda: ");
  const profession = await validateField("Masukkan profesi anda: ");

  updateById(id, { namee, clas, school, age, statuss, hoby, profession });
};

const validateField = async (question) => {
  let value = "";
  while (!isNonEmptyString(value)) {
    value = await listQuestion(question + " (Required): ");
    if (!isNonEmptyString(value)) {
      console.log("This field is mandatory. Please provide a value.");
    }
  }
  return value;
};

validateUpdate();

module.exports = {
  validateUpdate
}