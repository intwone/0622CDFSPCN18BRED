const CarrinhoController = {
    show: (req, res) => {
        const { carrinho } = req.session.user;

        let total = 0;

        if (!carrinho) {
            return res.render('carrinho', { carrinho: [], total });
        }

        carrinho.forEach(produto => {
            total += Number(produto.price);
        });

        return res.render('carrinho', { carrinho, total });
    },

    addCart: (req, res) => {
        const { id, name, price, image } = req.body;
        const produto = { id, name, price, image };

        if (req.session.user.carrinho) {
            req.session.user.carrinho.push(produto)
        } else {
            req.session.user.carrinho = [produto];
        }

        return res.redirect('/carrinho');
    },

    removeCart: (req, res) => {
        const { id } = req.params;
        let { carrinho } = req.session.user;

        const index = carrinho.findIndex(produto => produto.id == id);
        const carrinhoAtualizado = carrinho.splice(index, 1);
        carrinho = carrinhoAtualizado;

        if (carrinho.length <= 0) {
            carrinho = [];
            return res.redirect('/carrinho');
        }

        return res.redirect('/carrinho');
    }
};

module.exports = CarrinhoController;
