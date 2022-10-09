const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

module.export = getAll;
