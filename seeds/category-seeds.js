const { Category } = require('../models');

const categoryData = [
  {
    name: 'Shirts',
    description: 'Some description for shirts',
  },
  {
    name: 'Shorts',
    description: 'Some description for shorts',
  },
  {
    name: 'Music',
    description: 'Some description for music',
  },
  {
    name: 'Hats',
    description: 'Some description for hats',
  },
  {
    name: 'Shoes',
    description: 'Some description for shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
