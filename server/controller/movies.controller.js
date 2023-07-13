const fs = require("fs");

// Read JSON
const readJson = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
};

// List Movies API
const list = async (req, res) => {
  try {
    const jsonFile = process.cwd() + "/db/data.json";
    const data = JSON.parse(await readJson(jsonFile));

    return res.json({
      message: "data fetched",
      data,
    });
  } catch (err) {
    console.log("ERROR - movies controller - list - ", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  list,
};
