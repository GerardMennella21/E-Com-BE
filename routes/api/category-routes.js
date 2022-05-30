const router = require('express').Router();
const { Category, Product } = require('../../models');

// Retrieves all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: {exclude: ['categoryId']}
    }
  }).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category data found' });
      return;
    }
    res.json(dbCategoryData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

// Retrieves a single category by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: {exclude: ['categoryId']}
    }
  }).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'Category not found' })
      return;
    }
    res.json(dbCategoryData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

// Creates a category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

// Edits a category name
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'Category not found' })
      return;
    }
    res.json(dbCategoryData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

// Deletes a category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'Category not found' })
      return;
    }
    res.json(dbCategoryData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

module.exports = router;
