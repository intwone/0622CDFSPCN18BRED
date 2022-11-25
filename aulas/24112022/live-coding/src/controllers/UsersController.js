const getInfoFromDatabase = require("../utils/getInfoFromDatabase");
const { randomUUID } = require("crypto");
const path = require("path");
const fs = require("fs");

const UsersController = {
  listAll: (request, response) => {
    const users = getInfoFromDatabase("users");
    return response.json(users);
  },

  listOne: (request, response) => {
    const { id } = request.params;
    const users = getInfoFromDatabase("users");
    const userFound = users.find((user) => user.id === id);

    if (!userFound) {
      response
        .status(404)
        .json({ message: "Não existe nenhum usuário com esse id" });
    }

    return response.json(userFound);
  },

  create: (request, response) => {
    const { name, age } = request.body;

    const newUser = {
      id: randomUUID(),
      name,
      age,
      status: true,
    };

    const users = getInfoFromDatabase("users");

    const usersUpdated = [...users, newUser];

    const usersUpdatedJSON = JSON.stringify(usersUpdated);

    const filePath = path.join(__dirname, "..", "models", "users.json");

    fs.writeFileSync(filePath, usersUpdatedJSON);

    return response
      .status(201)
      .json({ message: "O usuário foi criado com sucesso" });
  },

  delete: (request, response) => {
    const { id } = request.params;
    const users = getInfoFromDatabase("users");

    const usersFiltered = users.filter((user) => user.id !== id);

    const usersUpdatedJSON = JSON.stringify(usersFiltered);

    const filePath = path.join(__dirname, "..", "models", "users.json");

    fs.writeFileSync(filePath, usersUpdatedJSON);

    return response.json({ message: "O usuário foi removido com sucesso" });
  },
};

module.exports = UsersController;
