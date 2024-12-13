import { notFound } from 'next/navigation';
import products from '../../../data/products.json'; // Import product data from JSON file
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";

type product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound(); // If product is not found, trigger a 404
  }

  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mt-28">
        <LayoutRow>
          <LayoutColumn>
          <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}


