
import { Product } from '../models/Product.js';

export const getProducts = async (req, res) => {
  const search = req.query.search;
  let products;
  if (search) {
    const lowerCaseSearch = search.toLowerCase();
    products = await Product.find();
    products = products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(lowerCaseSearch);
      const keywordsMatch = product.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseSearch));
      return nameMatch || keywordsMatch;
    });
  } else {
    products = await Product.find();
  }
  res.json(products);
};
