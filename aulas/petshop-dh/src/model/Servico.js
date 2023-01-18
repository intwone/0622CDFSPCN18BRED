const db = require("../database/db.json")

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
    }
}

module.exports = Servico;