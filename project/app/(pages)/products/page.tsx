import Link from 'next/link';
import products from '../../data/products.json'; // Import product data from JSON file
// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";

export default function Page() {
  return (
    <>
      <Layout className="mt-28">
        <LayoutRow>
          <LayoutColumn>
          <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`../pages/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}

