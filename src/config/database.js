const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const env = require("../.env");

/* 
const NAME = env.DB_NAME;
const PASSWORD = env.DB_PASSWORD; */

const NAME = "PedroClear";
const PASSWORD = env.PASSWORD;
const URI = `mongodb+srv://${NAME}:${PASSWORD}@mymoney-backend.k85c189.mongodb.net/?retryWrites=true&w=majority `;

console.log(URI);

module.exports = mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'.";
