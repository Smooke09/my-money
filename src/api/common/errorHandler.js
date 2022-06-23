const _ = require("lodash");

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    const erros = parsErros(bundle.errors);
    res.status(500).json({ erros });
  } else {
    next();
  }
};

const parsErros = (nodeRestfulErros) => {
  const errors = [];
  _.forIn(nodeRestfulErros, (error) => errors.push(error.message));
  return errors;
};
