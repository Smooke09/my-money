const express = require("express");
const auth = require("./auth");

module.exports = function (server) {
  const protectedApi = express.Router();
  server.use("/api", protectedApi);

  // rotas protegidas por Token JWT
  //Passando pelo filtro de autenticação
  protectedApi.use(auth);

  //Rota de ciclo de pagamentos dentro deela tem todos serviços criado
  const BillingCylce = require("../api/billingCycle/billingCycleService");
  BillingCylce.register(protectedApi, "/billingCycles");

  //Rotas abertas
  const openApi = express.Router();
  server.use("/oapi", openApi);

  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};
