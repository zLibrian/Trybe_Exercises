const { UPDATE_OPERATORS } = require("@babel/types");

const uppercase = (str, callback) => {
   callback(str.toUpperCase());
};

module.exports = {
  uppercase,
}