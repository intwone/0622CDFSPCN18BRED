const db = require("../database/db.json");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const Servico = {
    findAll: () => {
        const servicos = [];

        db.services.map(service => {
            servicos.push({
                id: service.id,
                nome: service.name,
                preco: `R$ ${service.price.toLocaleString("pt-BR", { currency: "BRL", minimumFractionDigits: 2 })}`,
                descricao: service.description,
                imagem: service.image
            })
        })

        return servicos;
    },

    create(obj) {

        const newService = {
            id: crypto.randomUUID(),
            name: obj.name,
            price: Number(obj.price),
            description: obj.description,
            image: obj.image,
        }

        db.services.push(newService);

        const dbJson = JSON.stringify(db, null, 4);
        fs.writeFileSync(path.resolve("src", "database", "db.json"), dbJson);

        return;
    },

    findByPk: (id) => {
        const service = db.services.find(servico => servico.id === id)

        return service
    },

    update: (id, obj) => {
        const index = db.services.findIndex(servico => servico.id === id);
        db.services[index] = obj;
        const dbJson = JSON.stringify(db, null, 4);
        fs.writeFileSync(path.resolve("src", "database", "db.json"), dbJson);

        return;
    }
}

module.exports = Servico;