const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Retrieves all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: {exclude: ['categoryId']}
    }
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

// Retrieves a tag
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: {exclude: ['categoryId']}
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Creates a tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Update a tag
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(dbTagData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// Delete a tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(dbTagData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
