const { randomUUID } = require('crypto');

const { Category } = require('../models')

const CategoryController = {
    index: async (req, res) => {
        const url = req.originalUrl;
        const categories = await Category.findAll()

        return res.render('admin/categories/index', {url, categories});
    },

    new: (req, res) => {
      const url = req.originalUrl;
      return res.render('admin/categories/new', { url })
    },

    create: async (req, res) => {
      const { description } = req.body

      const newCategory = {
        id: randomUUID(),
        description
      }

      await Category.create(newCategory)
      return res.redirect('/admin/categories')
    }
};

module.exports = CategoryController;
