// External packages
import getProducts from "@/lib/getProducts";
import Link from "next/link";
import Image from "next/image";

// Components
import { Layout, LayoutColumn, LayoutRow } from "@/components/Layout";

export default function ProductsPage() {
  const products = getProducts();

  const shuffledProducts = products.sort(() => Math.random() - 0.5);
  return (
    <Layout className="mt-28 md:mt-36 min-h-screen">
      <LayoutRow>
        <LayoutColumn>
          <h1 className="text-2xl md:text-4xl mb-16 md:mb-20">Products</h1>
        </LayoutColumn>
        {shuffledProducts.map((product) => (
          <LayoutColumn
            key={product.id}
            span={6}
            smSpan={4}
            xlSpan={3}
            className="mb-6 "
          >
            <Link href={`/products/${product.id}`}>
              <div className="p-2 rounded-lg shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <Image
                  src={`/images/${product.image}`}
                  alt={product.category}
                  width={300}
                  height={300}
                  className="w-full object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold">{product.category}</h3>
                <p className="text-sm text-gray-500">{product.price} EUR</p>
              </div>
            </Link>
          </LayoutColumn>
        ))}
      </LayoutRow>
    </Layout>
  );
}
