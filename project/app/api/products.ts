import { NextApiRequest, NextApiResponse } from 'next';
import products from '../data/products.json'; // Import the JSON file

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products); // Respond with all products
}
