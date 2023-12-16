const { Product } = require('../models');

const productData = [
  {
    name: 'Plain T-Shirt',
    description: 'Some description for Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    name: 'Running Sneakers',
    description: 'Some description for Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    name: 'Branded Baseball Hat',
    description: 'Some description for Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    name: 'Top 40 Music Compilation Vinyl Record',
    description: 'Some description for Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    name: 'Cargo Shorts',
    description: 'Some description for Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
