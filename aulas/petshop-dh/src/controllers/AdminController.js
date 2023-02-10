const Servico = require("../model/Servico");

const AdminController = {
    listServices: (req, res) => {
        const servicos = Servico.findAll();

        return res.render("admin/servicos", { servicos })
    },

    showCreateService: (req, res) => {
        return res.render("admin/servicos/cadastrar")
    },

    storeService: (req, res) => {
        const { name, price, description, image } = req.body;

        console.log(req.body)

        const servico = { name, price, description, image }

        Servico.create(servico);

        return res.redirect("/admin/servicos")
    },

    showEditService: (req, res) => {
        const { id } = req.params;

        const servico = Servico.findByPk(id);

        return res.render("admin/servicos/editar", { servico })
    },

    updateService: (req, res) => {
        const { id, name, description, price, image } = req.body;

        const servicoAtualizado = { id, name, description, price, image };

        Servico.update(id, servicoAtualizado);

        return res.redirect("/admin/servicos")
    },

    deleteService: (req, res) => {
        const { id } = req.params;

        Servico.destroy(id);

        return res.redirect("/admin/servicos");
    }
}

module.exports = AdminController;