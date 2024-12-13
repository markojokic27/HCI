import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../data/products.json'; // Import the JSON file

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find((p) => p.id === Number(id));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
}
